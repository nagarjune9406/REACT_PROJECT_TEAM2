import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CustomizationOptions.css';
function CustomizationOptions() {
  const [customText, setCustomText] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [customizations, setCustomizations] = useState([]); // Store all customizations
  const [editingId, setEditingId] = useState(null); // Track which item is being edited

  // Fetch all customizations on component mount
  useEffect(() => {
    fetchCustomizations();
  }, []);

  const fetchCustomizations = async () => {
    try {
      const response = await axios.get('http://localhost:3001/customizations');
      setCustomizations(response.data);
    } catch (error) {
      console.error('Error fetching customizations:', error);
    }
  };

  const handleTextChange = (e) => {
    setCustomText(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const customizationData = {
      text: customText,
      image: uploadedImage,
    };

    try {
      if (editingId) {
        // Update customization
        await axios.put(`http://localhost:3001/customizations/${editingId}`, customizationData);
        alert('Customization updated successfully!');
      } else {
        // Create new customization
        await axios.post('http://localhost:3001/customizations', customizationData);
        alert('Customization submitted successfully!');
      }

      // Clear form inputs and refresh list
      setCustomText('');
      setUploadedImage(null);
      setEditingId(null);
      fetchCustomizations();
    } catch (error) {
      console.error('Error submitting customization:', error);
      alert('Failed to submit customization. Please try again.');
    }
  };

  const handleEdit = (customization) => {
    setCustomText(customization.text);
    setUploadedImage(customization.image);
    setEditingId(customization.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/customizations/${id}`);
      alert('Customization deleted successfully!');
      fetchCustomizations();
    } catch (error) {
      console.error('Error deleting customization:', error);
      alert('Failed to delete customization. Please try again.');
    }
  };

  return (
    <div className="customization-options">
      <h2>Customization Options</h2>
      <form onSubmit={handleSubmit}>
        <div className="customization-text">
          <label>Add Custom Text:</label>
          <input
            type="text"
            value={customText}
            onChange={handleTextChange}
            placeholder="Enter your text"
          />
          <br />
          <br />
          <label>Preview: {customText}</label>
        </div>
        <br />
        <br />
        <div className="customization-image">
          <label>Upload Image:</label>
          <input type="file" onChange={handleImageUpload} />
          {uploadedImage && <img src={uploadedImage} alt="Custom" className="uploaded-image" />}
        </div>
        <br />
        <br />
        <button type="submit">{editingId ? 'Update Customization' : 'Submit Customization'}</button>
      </form>

      <h3>All Customizations</h3>
      <ul>
        {customizations.map((customization) => (
          <li key={customization.id}>
            <p>Text: {customization.text}</p>
            {customization.image && (
              <img src={customization.image} alt="Custom" style={{ width: '100px' }} />
            )}
            <button onClick={() => handleEdit(customization)}>Edit</button>
            <button onClick={() => handleDelete(customization.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomizationOptions;

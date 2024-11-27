import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductCatalog.css';

const apiUrl = 'http://localhost:5000/products';

function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', image: '', description: '', price: '', category: '', rating: '' });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(apiUrl);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post(apiUrl, newProduct);
      setProducts([...products, response.data]);
      setNewProduct({ name: '', image: '', description: '', price: '', category: '', rating: '' });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleEditProduct = async () => {
    if (!editingProduct) return;
    try {
      const response = await axios.put(`${apiUrl}/${editingProduct.id}`, editingProduct);
      setProducts(products.map((product) => (product.id === response.data.id ? response.data : product)));
      setEditingProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="product-catalog">
      <h2>Product Catalog</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <p className="description">{product.description}</p>
            <p className="price">₹{product.price}</p>
            <p className="rating">Rating: ⭐ {product.rating}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => setEditingProduct(product)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h3>Cart Items: {cart.length}</h3>
        {cart.length > 0 && (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="add-product">
        <h3>Add New Product</h3>
        <input name="name" placeholder="Product Name" value={newProduct.name} onChange={handleInputChange} />
        <input name="image" placeholder="Image URL" value={newProduct.image} onChange={handleInputChange} />
        <input name="description" placeholder="Description" value={newProduct.description} onChange={handleInputChange} />
        <input name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} />
        <input name="category" placeholder="Category" value={newProduct.category} onChange={handleInputChange} />
        <input name="rating" placeholder="Rating" value={newProduct.rating} onChange={handleInputChange} />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      {editingProduct && (
        <div className="edit-product">
          <h3>Edit Product</h3>
          <input
            name="name"
            placeholder="Product Name"
            value={editingProduct.name}
            onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
          />
          <input
            name="image"
            placeholder="Image URL"
            value={editingProduct.image}
            onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
          />
          <input
            name="description"
            placeholder="Description"
            value={editingProduct.description}
            onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
          />
          <input
            name="price"
            placeholder="Price"
            value={editingProduct.price}
            onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
          />
          <input
            name="category"
            placeholder="Category"
            value={editingProduct.category}
            onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
          />
          <input
            name="rating"
            placeholder="Rating"
            value={editingProduct.rating}
            onChange={(e) => setEditingProduct({ ...editingProduct, rating: e.target.value })}
          />
          <button onClick={handleEditProduct}>Update Product</button>
        </div>
      )}
    </div>
  );
}

export default ProductCatalog;

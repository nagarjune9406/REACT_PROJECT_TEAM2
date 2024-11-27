import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Make sure to import your CSS

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users', {
        email,
        password,
      });
      setMessage('Registration successful! Please login.');
      setTimeout(() => {
        setIsRegistering(false); // Switch to login form
      }, 2000);
    } catch (error) {
      setMessage('Registration failed. Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);
      const user = response.data[0];

      if (user) {
        alert(`Welcome ${user.email}!`);
        navigate('/customize'); // Redirect to HomeScreen after successful loginnpm 
      } else {
        setMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {message && <p style={{ color: 'red' }}>{message}</p>}
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      <p>
        {isRegistering ? (
          <>Already have an account? <button onClick={() => setIsRegistering(false)}>Login here</button></>
        ) : (
          <>Don't have an account? <button onClick={() => setIsRegistering(true)}>Sign up here</button></>
        )}
      </p>
    </div>
  );
}

export default Login;

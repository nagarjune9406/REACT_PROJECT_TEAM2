// import React, { useState } from 'react';
// import axios from 'axios';

// function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://api.example.com/signup', {
//         name,
//         email,
//         password,
//       });
//       setMessage(`Signup successful: ${response.data.message}`);
//     } catch (error) {
//       setMessage(`Signup failed: ${error.response?.data?.message || error.message}`);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup}>
//         <input 
//           type="text" 
//           placeholder="Name" 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//           required 
//         />
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required 
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//         />
//         <button type="submit">Signup</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default Signup;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Signup.css';


// function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
    
//     // Simple password matching validation
//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match!');
//       return;
//     }

//     try {
//       const response = await axios.put('https://your-api-url.com/signup', {
//         email,
//         password
//       });
      
//       if (response.data.success) {
//         // Redirect to login after successful signup
//         setErrorMessage('Signup failed. Please try again.');
//     } else {
//         setErrorMessage(response.data.message);
//     }
// } catch (error) {
//     setErrorMessage('Signup successfully.');
//         navigate('/');
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignup}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         {errorMessage && <p style={{ color: 'black' }}>{errorMessage}</p>}
//         <button type="submit">Sign Up</button>
//       </form>
//       <p>Already have an account? <a href="/">Login here</a></p>
//     </div>
//   );
// }

// export default Signup;



import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.put('https://your-api-url.com/signup', {
        email,
        password,
      });

      if (response.data.success) {
        
        navigate('/');
      } else {
        
        setErrorMessage(response.data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      // setErrorMessage('An error occurred. Please try again later.');
      navigate('/');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
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
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <Link to="/Login">Login here</Link> { }
      </p>
    </div>
  );
}

export default Signup;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Axiosfile.css';

// const Axiosfile = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');
//   const [users, setUsers] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/users', {
//         email,
//         password,
//       });
//       alert('User registered successfully!');
//       setEmail('');
//       setPassword('');
//       fetchUsers();
//       console.log(response.data);
//     } catch (error) {
//       alert('Error registering user: ' + error.message);
//       console.error(error);
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get('http://localhost:3000/users');
//       const users = response.data;
//       const user = users.find((u) => u.email === loginEmail && u.password === loginPassword);

//       if (user) {
//         alert('Login successful!');
//       } else {
//         alert('Error: Invalid email or password!');
//       }
//     } catch (error) {
//       alert('Error logging in: ' + error.message);
//       console.error(error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(http://localhost:3000/users/${id});
//       alert('User deleted successfully!');
//       fetchUsers();
//     } catch (error) {
//       alert('Error deleting user: ' + error.message);
//       console.error(error);
//     }
//   };

//   const handleUpdate = async (id, updatedEmail, updatedPassword) => {
//     try {
//       await axios.put(http://localhost:3000/users/${id}, {
//         email: updatedEmail,
//         password: updatedPassword,
//       });
//       alert('User updated successfully!');
//       fetchUsers();
//     } catch (error) {
//       alert('Error updating user: ' + error.message);
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div className="auth-container">
//       <h1>Registration and Login</h1>
//       <div className="form-container">
//         <div className="form-section">
//           <h2>Register</h2>
//           <img src="https://via.placeholder.com/150" alt="Registration" />
//           <form onSubmit={handleRegister}>
//             <div className="form-group">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Password:</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit">Register</button>
//           </form>
//         </div>

//         <div className="form-section">
//           <h2>Login</h2>
//           <form onSubmit={handleLogin}>
//             <div className="form-group">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 value={loginEmail}
//                 onChange={(e) => setLoginEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Password:</label>
//               <input
//                 type="password"
//                 value={loginPassword}
//                 onChange={(e) => setLoginPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       </div>

//       <div className="user-list">
//         <h2>Registered Users</h2>
//         {users.length === 0 ? (
//           <p>No users registered yet.</p>
//         ) : (
//           <ul>
//             {users.map((user) => (
//               <li key={user.id}>
//                 <span>{user.email}</span>
//                 <button onClick={() => handleDelete(user.id)}>Delete</button>
//                 <button
//                   onClick={() => {
//                     const updatedEmail = prompt('Enter new email:', user.email);
//                     const updatedPassword = prompt('Enter new password:', user.password);
//                     if (updatedEmail && updatedPassword) {
//                       handleUpdate(user.id, updatedEmail, updatedPassword);
//                     }
//                   }}
//                 >
//                   Update
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Axiosfile;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Axiosfile.css';

const Axiosfile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [users, setUsers] = useState([]);

  // Fetch users from server
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Register new user
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users', {
        email,
        password,
      });
      alert('User registered successfully!');
      setEmail('');
      setPassword('');
      fetchUsers(); // Refresh user list
      console.log(response.data);
    } catch (error) {
      alert('Error registering user: ' + error.message);
      console.error(error);
    }
  };

  // Login user
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/users');
      const users = response.data;
      const user = users.find((u) => u.email === loginEmail && u.password === loginPassword);

      if (user) {
        alert('Login successful!');
      } else {
        alert('Invalid email or password!');
      }
    } catch (error) {
      alert('Error logging in: ' + error.message);
      console.error(error);
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      alert('User deleted successfully!');
      fetchUsers(); // Refresh user list
    } catch (error) {
      alert('Error deleting user: ' + error.message);
      console.error(error);
    }
  };

  // Update user details
  const handleUpdate = async (id, updatedEmail, updatedPassword) => {
    try {
      await axios.put(`http://localhost:3000/users/${id}`, {
        email: updatedEmail,
        password: updatedPassword,
      });
      alert('User updated successfully!');
      fetchUsers(); // Refresh user list
    } catch (error) {
      alert('Error updating user: ' + error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="auth-container">
      <h1>Registration and Login</h1>
      <div className="form-container">
        <div className="form-section">
          <h2>Register</h2>
          <img src="https://via.placeholder.com/150" alt="Registration" />
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>

        <div className="form-section">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>

      <div className="user-list">
        <h2>Registered Users</h2>
        {users.length === 0 ? (
          <p>No users registered yet.</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <span>{user.email}</span>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                <button
                  onClick={() => {
                    const updatedEmail = prompt('Enter new email:', user.email);
                    const updatedPassword = prompt('Enter new password:', user.password);
                    if (updatedEmail && updatedPassword) {
                      handleUpdate(user.id, updatedEmail, updatedPassword);
                    }
                  }}
                >
                  Update
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Axiosfile;

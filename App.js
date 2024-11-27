// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import HomeScreen from './components/HomeScreen';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import ProductCatalog from './components/ProductCatalog';
// import CustomizationOptions from './components/CustomizationOptions';
// import OrderForm from './components/OrderForm';
// import OrderTracking from './components/OrderTracking';
// import UserReviews from './components/UserReviews';
// import './index.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/signup">Signup</Link></li>
//             <li><Link to="/catalog">Product Catalog</Link></li>
//             <li><Link to="/customize">Customize Gift</Link></li>
//             <li><Link to="/order">Order Form</Link></li>
//             <li><Link to="/track">Order Tracking</Link></li>
//             <li><Link to="/reviews">User Reviews</Link></li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<HomeScreen />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/catalog" element={<ProductCatalog />} />
//           <Route path="/customize" element={<CustomizationOptions />} />
//           <Route path="/order" element={<OrderForm />} />
//           <Route path="/track" element={<OrderTracking />} />
//           <Route path="/reviews" element={<UserReviews />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import Signup from './components/Signup';
import ProductCatalog from './components/ProductCatalog';
import CustomizationOptions from './components/CustomizationOptions';
import OrderForm from './components/OrderForm';
import OrderTracking from './components/OrderTracking';
import UserReviews from './components/UserReviews';
import './index.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        {}
        <nav className="top-navbar">
        <ul className="nav-lists">
          <h1>CUSTOMIZED GIFT PORTAL</h1>
          </ul>
        </nav>
        <nav className="top-nav">
          <ul className="nav-list">
          
            <li><Link to="/login">LogIn</Link></li>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/signup">Signup</Link></li> */}
            <li><Link to="/catalog">Product Catalog</Link></li>
            <li><Link to="/customize">Customize Gift</Link></li>
            <li><Link to="/order">Order Form</Link></li>
            <li><Link to="/track">Order Tracking</Link></li>
            <li><Link to="/reviews">User Reviews</Link></li>
          </ul>
        </nav>

        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/catalog" element={<ProductCatalog />} />
          <Route path="/customize" element={<CustomizationOptions />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/track" element={<OrderTracking />} />
          <Route path="/reviews" element={<UserReviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


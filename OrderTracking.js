// import React, { useState } from 'react';
// import axios from 'axios';

// function OrderTracking() {
//   const [orderId, setOrderId] = useState('');
//   const [status, setStatus] = useState('');
//   const [error, setError] = useState('');

//   const handleTrackOrder = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(`https://api.example.com/orders/${orderId}`);
//       setStatus(`Order Status: ${response.data.status}`);
//       setError('');
//     } catch (error) {
//       setError('Failed to fetch order status.');
//       setStatus('');
//     }
//   };

//   return (
//     <div>
//       <h2>Order Tracking</h2>
//       <form onSubmit={handleTrackOrder}>
//         <input 
//           type="text" 
//           placeholder="Enter Order ID" 
//           value={orderId} 
//           onChange={(e) => setOrderId(e.target.value)} 
//           required 
//         />
//         <button type="submit">Track Order</button>
//       </form>
//       <p>{status}</p>
//       <p style={{ color: 'red' }}>{error}</p>
//     </div>
//   );
// }

// export default OrderTracking;


import React, { useState } from 'react';

const orders = [
  { orderId: '123', status: 'Shipped' },
  { orderId: '124', status: 'Delivered' },
  { orderId: '125', status: 'Processing' },
];

function OrderTracking() {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState('');

  const handleTrackOrder = () => {
    const order = orders.find(o => o.orderId === orderId);
    if (order) {
      setOrderStatus(order.status);
    } else {
      setOrderStatus('Order not found');
    }
  };

  return (
    <div className="order-tracking">
      <h2>Order Tracking</h2>
      <input
        type="text"
        placeholder="Enter your order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <br>
      </br>
      <br></br>
      <button onClick={handleTrackOrder}>Track Order</button>
      {orderStatus && <h2>Status: {orderStatus}</h2>}
    </div>
  );
}

export default OrderTracking;

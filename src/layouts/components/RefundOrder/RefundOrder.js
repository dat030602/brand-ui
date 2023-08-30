import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RefundOrder() {
  const { orderID } = useParams();
  const [orderDetail, setOrderDetail] = useState('');
  const [reason, setReason] = useState('');
  const [details, setDetails] = useState('');
  const [upload, setUpload] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        // Replace this with your API endpoint to fetch order details and items
        const response = await fetch(`/api/orders/${orderID}`);
        const data = await response.json();
        setOrderItems(data.items);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderItems();
  }, [orderID]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process refund request here (send data to server or handle locally)
    setSubmitted(true);
  };

  return (
    <div className="refund-page">
      <h2>Refund Request</h2>
      <div className="order-details">
        <h3>Order Details</h3>
        {orderItems.length > 0 ? (
          <ul>
            {orderItems.map((item) => (
              <li key={item.productId}>
                <div>Product: {item.productName}</div>
                <div>Price: ${item.price}</div>
                <div>Quantity: {item.quantity}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items found for this order.</p>
        )}
      </div>
      {submitted ? (
        <div className="confirmation-message">
          <p>Your refund request has been submitted. We will review it shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Reason for Refund:</label>
            <select value={reason} onChange={(e) => setReason(e.target.value)} required>
              <option value="">Select a reason</option>
              <option value="wrong_item">Wrong Item Received</option>
              <option value="damaged">Item Damaged</option>
              <option value="changed_mind">Changed Mind</option>
            </select>
          </div>
          <div className="form-group">
            <label>Additional Details:</label>
            <textarea value={details} onChange={(e) => setDetails(e.target.value)} rows="4" />
          </div>
          <div className="form-group">
            <label>Upload Evidence (if applicable):</label>
            <input type="file" onChange={(e) => setUpload(e.target.files[0])} />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default RefundOrder;

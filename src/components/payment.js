import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    creditCardNumber: '', expirationDate: '', cvv: '', paypalEmail: ''
  });

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setPaymentDetails({ creditCardNumber: '', expirationDate: '', cvv: '', paypalEmail: '' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (paymentMethod === 'Credit Card' && (!paymentDetails.creditCardNumber || !paymentDetails.expirationDate || !paymentDetails.cvv)) {
      return alert('Please fill in all credit card details.');
    }
    if (paymentMethod === 'PayPal' && !paymentDetails.paypalEmail) {
      return alert('Please enter your PayPal email.');
    }
    alert(`Payment successful with ${paymentMethod}`);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 2000);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Select Payment Method</h2>
      <div className="payment-methods mb-4">
        {['Credit Card', 'PayPal'].map((method) => (
          <div key={method} className="form-check">
            <input
              type="radio"
              id={method}
              name="paymentMethod"
              value={method}
              className="form-check-input"
              checked={paymentMethod === method}
              onChange={handlePaymentMethodChange}
            />
            <label className="form-check-label" htmlFor={method}>{method}</label>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        {paymentMethod === 'Credit Card' && (
          <>
            <div className="mb-3">
              <label htmlFor="creditCardNumber" className="form-label">Credit Card Number</label>
              <input type="text" id="creditCardNumber" name="creditCardNumber" value={paymentDetails.creditCardNumber} onChange={handleInputChange} className="form-control" placeholder="1234 5678 9876 5432" required />
            </div>
            <div className="mb-3">
              <label htmlFor="expirationDate" className="form-label">Expiration Date (MM/YY)</label>
              <input type="text" id="expirationDate" name="expirationDate" value={paymentDetails.expirationDate} onChange={handleInputChange} className="form-control" placeholder="MM/YY" required />
            </div>
            <div className="mb-3">
              <label htmlFor="cvv" className="form-label">CVV</label>
              <input type="text" id="cvv" name="cvv" value={paymentDetails.cvv} onChange={handleInputChange} className="form-control" placeholder="123" required />
            </div>
          </>
        )}
        {paymentMethod === 'PayPal' && (
          <div className="mb-3">
            <label htmlFor="paypalEmail" className="form-label">PayPal Email</label>
            <input type="email" id="paypalEmail" name="paypalEmail" value={paymentDetails.paypalEmail} onChange={handleInputChange} className="form-control" placeholder="example@paypal.com" required />
          </div>
        )}
        <div className="mt-4 text-center">
          <button type="submit" className="btn btn-success">Submit Payment</button>
        </div>
      </form>
    </div>
  );
};

export default Payment;


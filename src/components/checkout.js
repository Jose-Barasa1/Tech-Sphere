import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart, clearCart }) => {
  const [purchaseComplete, setPurchaseComplete] = useState(false); // State to track if purchase is complete
  const total = cart.reduce((acc, product) => acc + product.price, 0).toFixed(2);

  const navigate = useNavigate();

  // Navigate to the products page
  const handleBackToProducts = () => {
    navigate('/'); // Goes to the homepage or product list
  };

  const handleCompletePurchase = () => {
    // Log to see if this is being triggered
    console.log('Completing purchase...');

    // Set purchase to complete
    setPurchaseComplete(true);

    // Clear the cart after a delay to show success message first
    setTimeout(() => {
      clearCart(); // Clear the cart after a delay
    }, 2000); // 2 seconds delay
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {/* Stylish Curved Box for Total */}
          <div className="total-box p-3 mb-4" style={{
            borderRadius: '15px',
            border: '1px solid #ddd',
            backgroundColor: '#f8f9fa',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            maxWidth: '280px',
            margin: '0 auto',
          }}>
            <h4>Total: <strong>${total}</strong></h4>
          </div>

          {/* Cart Items Container */}
          <div className="cart-box p-3 mb-4" style={{
            borderRadius: '15px',
            border: '1px solid #ddd',
            backgroundColor: '#f8f9fa',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
          }}>
            <h5>Your Cart</h5>
            <div className="cart-items">
              {cart.map((product) => (
                <div key={product.id} className="cart-item d-flex mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-thumbnail"
                    style={{ width: '80px', height: '80px', marginRight: '15px' }}
                  />
                  <div>
                    <h6>{product.name}</h6>
                    <p>{product.description}</p>
                    <p><strong>${product.price.toFixed(2)}</strong></p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success message after purchase */}
          {purchaseComplete && (
            <div className="alert alert-success text-center" role="alert">
              <h4>Thank you for your purchase!</h4>
              <p>Your order has been successfully processed.</p>
            </div>
          )}

          {/* Checkout buttons */}
          <div className="mt-4 text-center">
            <button onClick={clearCart} className="btn btn-danger me-3" disabled={purchaseComplete}>
              Clear Cart
            </button>
            <button onClick={handleCompletePurchase} className="btn btn-success me-3" disabled={purchaseComplete}>
              Complete Purchase
            </button>
            <button onClick={handleBackToProducts} className="btn btn-secondary">
              Back to Products
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
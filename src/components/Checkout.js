import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart, clearCart }) => {
  const total = cart.reduce((acc, product) => acc + product.price, 0).toFixed(2);
  const navigate = useNavigate();

  // Navigate to the products page
  const handleBackToProducts = () => {
    navigate('/'); // Goes to the homepage or product list
  };

  // Navigate to the payment page after checkout
  const handleProceedToPayment = () => {
    navigate('/payment');  // Navigate to the payment page
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

          {/* Checkout buttons */}
          <div className="mt-4 text-center">
            <button onClick={clearCart} className="btn btn-dark me-3">
              Clear Cart
            </button>
            <button onClick={handleProceedToPayment} className="btn btn-dark me-3">
              Proceed to Payment
            </button>
            <button onClick={handleBackToProducts} className="btn btn-dark">
              Back to Products
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;


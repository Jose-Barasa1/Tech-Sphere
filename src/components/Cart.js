import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const total = cart.reduce((acc, product) => acc + product.price, 0).toFixed(2);

  // Handle removing an item from the cart
  const handleRemoveItem = (id) => {
    removeFromCart(id); // Call the remove function from the parent component
  };

 


  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty!</p>
      ) : (
        <div>
          {/* Stylish Curved Cart Box */}
          <div className="cart-box p-4 mb-4" style={{
            borderRadius: '15px',
            border: '1px solid #ddd',
            backgroundColor: '#f8f9fa',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}>
            <h5>Your Cart</h5>

            {/* Loop over cart items */}
            <div className="cart-items">
              {cart.map((product) => (
                <div key={product.id} className="cart-item d-flex mb-3 align-items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-thumbnail me-3"
                    style={{ width: '80px', height: '80px' }}
                  />
                  <div className="w-100">
                    <h6>{product.name}</h6>
                    <p>{product.description}</p>
                    <p><strong>${product.price.toFixed(2)}</strong></p>
                    <button
                      onClick={() => handleRemoveItem(product.id)}
                      className="btn btn-dark btn-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total, Clear Cart, and Checkout Buttons */}
          <div className="total-box p-3" style={{
            borderRadius: '15px',
            border: '1px solid #ddd',
            backgroundColor: '#f8f9fa',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '280px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            <h4>Total: <strong>${total}</strong></h4>

    

            {/* Proceed to Checkout Button */}
            <Link to="/checkout" className="btn btn-dark mt-3 ms-2">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

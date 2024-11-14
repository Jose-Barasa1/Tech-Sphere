import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import About from './components/About';
<<<<<<< HEAD
import Reviews from './components/Reviews';
=======
import Reviews from './components/Reviews'; // Import Reviews component
>>>>>>> 595c352b07b0bdb1a02af199afa5b2fedf7af0b5
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
<<<<<<< HEAD

// ProtectedRoute component
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Check if user is authenticated

  if (!isAuthenticated) {
    // If not authenticated, redirect to Sign Up
    return <Navigate to="/signup" />;
  }

  return element; // Return the requested element if authenticated
=======
import Newsletter from './components/Newsletter';

// ProtectedRoute component
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return element;
>>>>>>> 595c352b07b0bdb1a02af199afa5b2fedf7af0b5
};

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    fetch(`http://localhost:3000/products`)
=======
    fetch('http://localhost:8000/products')
>>>>>>> 595c352b07b0bdb1a02af199afa5b2fedf7af0b5
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error loading products:', error));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div>
<<<<<<< HEAD
        <Navbar />
=======
        <Navbar cart={cart} />
>>>>>>> 595c352b07b0bdb1a02af199afa5b2fedf7af0b5
        <div className="container mt-4">
          <Routes>
            {/* Public Routes */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />

            {/* Protected Routes */}
            <Route
              path="/"
              element={<ProtectedRoute element={<ProductList products={products} addToCart={addToCart} />} />}
            />
            <Route
              path="/cart"
              element={<ProtectedRoute element={<Cart cart={cart} removeFromCart={removeFromCart} />} />}
            />
            <Route
              path="/checkout"
              element={<ProtectedRoute element={<Checkout cart={cart} clearCart={clearCart} />} />}
            />
<<<<<<< HEAD
            <Route
              path="/about"
              element={<ProtectedRoute element={<About />} />}
            />
            <Route
              path="/reviews"
              element={<ProtectedRoute element={<Reviews />} />}
            />
            <Route
              path="/menu"
              element={<ProtectedRoute element={<Menu products={products} />} />}
            />
=======
            <Route path="/about" element={<ProtectedRoute element={<About />} />} />
            <Route path="/menu" element={<ProtectedRoute element={<Menu products={products} />} />} />
>>>>>>> 595c352b07b0bdb1a02af199afa5b2fedf7af0b5
            <Route
              path="/product/:id"
              element={<ProtectedRoute element={<ProductDetails products={products} addToCart={addToCart} />} />}
            />
<<<<<<< HEAD
=======

            {/* Add the Reviews Route */}
            <Route path="/reviews" element={<ProtectedRoute element={<Reviews />} />} />
            
            {/* Newsletter Route */}
            <Route path="/newsletter" element={<Newsletter />} />
>>>>>>> 595c352b07b0bdb1a02af199afa5b2fedf7af0b5
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


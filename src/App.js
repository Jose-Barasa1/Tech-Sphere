import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import About from './components/About';
import Reviews from './components/Reviews'; // Import Reviews component
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Newsletter from './components/Newsletter';

// ProtectedRoute component
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return element;
};

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
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
        <Navbar cart={cart} />
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
            <Route path="/about" element={<ProtectedRoute element={<About />} />} />
            <Route path="/menu" element={<ProtectedRoute element={<Menu products={products} />} />} />
            <Route
              path="/product/:id"
              element={<ProtectedRoute element={<ProductDetails products={products} addToCart={addToCart} />} />}
            />

            {/* Add the Reviews Route */}
            <Route path="/reviews" element={<ProtectedRoute element={<Reviews />} />} />
            
            {/* Newsletter Route */}
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


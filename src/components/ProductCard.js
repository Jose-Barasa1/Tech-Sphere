// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="col-md-6 mb-4"> {/* Adjusted column size for better layout */}
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p><strong>${product.price.toFixed(2)}</strong></p>
          
          {/* Add to Cart Button */}
          <button 
            onClick={() => addToCart(product)} 
            className="btn btn-dark w-100 mb-2"
          >
            Add to Cart
          </button>

          {/* Link to Product Details Page */}
          <Link 
            to={`/product/${product.id}`} 
            className="btn btn-dark w-100"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

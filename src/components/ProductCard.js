// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p><strong>${product.price.toFixed(2)}</strong></p>
          <button onClick={() => addToCart(product)} className="btn btn-primary">
            Add to Cart
          </button>
          <Link to={`/product/${product.id}`} className="btn btn-info ms-2">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card product-card text-black">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p><strong>${product.price.toFixed(2)}</strong></p>
        
        <button 
          onClick={() => addToCart(product)} 
          className="btn btn-dark w-100 mb-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;


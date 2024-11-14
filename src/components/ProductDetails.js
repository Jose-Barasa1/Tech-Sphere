// src/components/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams(); // Get the 'id' from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product by id
    const foundProduct = products.find((product) => product.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) {
    return <p>Loading...</p>; // If no product found, show loading message
  }

  return (
    <div className="container mt-4">
      <div className="product-details">
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} className="img-fluid" />
        <p>{product.description}</p>
        <p><strong>${product.price.toFixed(2)}</strong></p>
        <p>Rating: {product.rating} ⭐</p>
        <button onClick={() => addToCart(product)} className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

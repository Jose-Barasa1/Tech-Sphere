import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams(); // Get the 'id' from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((product) => product.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">
          <div className="card product-details-card text-black">
            <img src={product.image} className="card-img-top product-image" alt={product.name} />
            <div className="card-body">
              <h1 className="card-title product-title">{product.name}</h1>
              <p className="card-text product-description">{product.description}</p>
              <p className="product-price"><strong>${product.price.toFixed(2)}</strong></p>
              <p className="product-rating">Rating: {product.rating} ⭐</p>
              
              <button 
                onClick={() => addToCart(product)} 
                className="btn btn-dark w-100"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

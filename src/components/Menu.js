import React, { useState } from 'react';

const Menu = ({ products }) => {
  const [filter, setFilter] = useState('All');

  const filteredProducts = products.filter((product) => {
    if (filter === 'All') return true;
    return product.category === filter;
  });

  return (
    <div>
      <h2>Our Product Menu</h2>
      {/* Filter Dropdown */}
      <div className="mb-4">
        <label htmlFor="filter" className="form-label">Filter by Category</label>
        <select
          id="filter"
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="TV">TV</option>
          <option value="Laptop">Laptop</option>
          <option value="Headphone">Headphone</option>
        </select>
      </div>

      {/* Product List */}
      <div className="row">
        {filteredProducts.length === 0 ? (
          <p>No products found for this category.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div
                className="card"
                style={{
                  borderRadius: '15px', 
                  backgroundColor: '#f5f5dc', 
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body" style={{ padding: '15px' }}>
                  <h5 className="card-title" style={{ fontSize: '1.2rem' }}>{product.name}</h5>
                  <p className="card-text" style={{ fontSize: '0.9rem' }}>{product.description}</p>
                  <p className="card-text" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Menu;
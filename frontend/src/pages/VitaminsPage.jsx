import React from 'react';
import './CommonPage.css';

const products = [
  { name: 'Vitamin 1', price: '$9.99', imageUrl: '/images/vitamin-1.jpg' },
  { name: 'Vitamin 2', price: '$12.99', imageUrl: '/images/vitamin-2.jpg' },
  // Add more products as needed
];

const VitaminsPage = () => {
  return (
    <>
    <div className="header">
        <h1 className="logo">
          Flex<span className="white-text">Fuels</span>
          <p className="tagline">...a one stop solution for optimum nutrition</p>
        </h1>
      </div>
    <div className="page">
      <h1 className="page-title">Vitamins</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card" style={{ backgroundImage: `url(${product.imageUrl})` }}>
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default VitaminsPage;

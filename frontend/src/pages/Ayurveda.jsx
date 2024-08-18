import React from 'react';
import './CommonPage.css';

const products = [
  { name: 'Ayurvedic Product 1', price: '$19.99', imageUrl: '/images/ayurveda-1.jpg' },
  { name: 'Ayurvedic Product 2', price: '$22.99', imageUrl: '/images/ayurveda-2.jpg' },
  // Add more products as needed
];

const AyurvedaPage = () => {
  return (
    <>
    <div className="header">
        <h1 className="logo">
          Flex<span className="white-text">Fuels</span>
          <p className="tagline">...a one stop solution for optimum nutrition</p>
        </h1>
      </div>
    <div className="page">
      <h1 className="page-title">Ayurveda</h1>
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

export default AyurvedaPage;

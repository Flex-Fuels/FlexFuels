import React from 'react';
import './Gainers.css';

const products = [
  { name: 'Mass Gainer 1', price: '₹49.99', imageUrl: '/images/mass-gainer-1.jpg' },
  { name: 'Mass Gainer 2', price: '₹54.99', imageUrl: '/images/mass-gainer-2.jpg' },
  { name: 'Mass Gainer 3', price: '₹59.99', imageUrl: '/images/mass-gainer-3.jpg' },
  { name: 'Mass Gainer 4', price: '₹64.99', imageUrl: '/images/mass-gainer-4.jpg' },
  { name: 'Mass Gainer 5', price: '₹69.99', imageUrl: '/images/mass-gainer-5.jpg' },
  { name: 'Mass Gainer 6', price: '₹74.99', imageUrl: '/images/mass-gainer-6.jpg' },
  { name: 'Mass Gainer 7', price: '₹79.99', imageUrl: '/images/mass-gainer-7.jpg' },
  { name: 'Mass Gainer 8', price: '₹84.99', imageUrl: '/images/mass-gainer-8.jpg' },
  { name: 'Mass Gainer 9', price: '₹89.99', imageUrl: '/images/mass-gainer-9.jpg' },
  { name: 'Mass Gainer 10', price: '₹94.99', imageUrl: '/images/mass-gainer-10.jpg' },
  { name: 'Mass Gainer 11', price: '₹99.99', imageUrl: '/images/mass-gainer-11.jpg' },
  { name: 'Mass Gainer 12', price: '₹104.99', imageUrl: '/images/mass-gainer-12.jpg' }
];

const GainersPage = () => {
  return (
    <>
    <div className="header">
        <h1 className="logo">
          Flex<span className="white-text">Fuels</span>
          <p className="tagline">...a one stop solution for optimum nutrition</p>
        </h1>
      </div>
    <div className="gainers-page">
      <h1 className="page-title">Gainers</h1>
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

export default GainersPage;

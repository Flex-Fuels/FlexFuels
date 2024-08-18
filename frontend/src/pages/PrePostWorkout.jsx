import React from 'react';
import './CommonPage.css';

const products = [
  { name: 'Pre-Workout 1', price: '$29.99', imageUrl: '/images/pre-workout-1.jpg' },
  { name: 'Pre-Workout 2', price: '$34.99', imageUrl: '/images/pre-workout-2.jpg' },
  { name: 'Post-Workout 1', price: '$24.99', imageUrl: '/images/post-workout-1.jpg' },
  { name: 'Post-Workout 2', price: '$27.99', imageUrl: '/images/post-workout-2.jpg' },
  // Add more products as needed
];

const PrePostWorkoutPage = () => {
  return (
    <>
    <div className="header">
        <h1 className="logo">
          Flex<span className="white-text">Fuels</span>
          <p className="tagline">...a one stop solution for optimum nutrition</p>
        </h1>
      </div>
    <div className="page">
      <h1 className="page-title">Pre/Post Workout</h1>
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

export default PrePostWorkoutPage;

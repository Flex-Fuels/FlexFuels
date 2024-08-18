import React from 'react';
import './Proteins.css';

const products = [
  { name: 'Whey Protein', price: '₹29.99', imageUrl: '/images/whey-protein.jpg' },
  { name: 'Casein Protein', price: '₹34.99', imageUrl: '/images/casein-protein.jpg' },
  { name: 'Soy Protein', price: '₹24.99', imageUrl: '/images/soy-protein.jpg' },
  { name: 'Pea Protein', price: '₹27.99', imageUrl: '/images/pea-protein.jpg' },
  { name: 'Hemp Protein', price: '₹31.99', imageUrl: '/images/hemp-protein.jpg' },
  { name: 'Egg White Protein', price: '₹33.99', imageUrl: '/images/egg-white-protein.jpg' },
  { name: 'Brown Rice Protein', price: '₹25.99', imageUrl: '/images/brown-rice-protein.jpg' },
  { name: 'Beef Protein', price: '₹36.99', imageUrl: '/images/beef-protein.jpg' },
  { name: 'Multi-Protein Blend', price: '₹38.99', imageUrl: '/images/multi-protein-blend.jpg' },
  { name: 'Isolate Protein', price: '₹40.99', imageUrl: '/images/isolate-protein.jpg' },
  { name: 'Hydrolyzed Protein', price: '₹45.99', imageUrl: '/images/hydrolyzed-protein.jpg' },
  { name: 'Protein Powder Sample', price: '₹9.99', imageUrl: '/images/protein-powder-sample.jpg' }
];

const ProteinsPage = () => {
  return (
    <>
    <div className="header">
        <h1 className="logo">
          Flex<span className="white-text">Fuels</span>
          <p className="tagline">...a one stop solution for optimum nutrition</p>
        </h1>
      </div>
    <div className="proteins-page">
      <h1 className="page-title">Proteins</h1>
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

export default ProteinsPage;

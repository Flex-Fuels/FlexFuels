import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Category.css';

const categories = [
  { name: 'Proteins', path: '/proteins' },
  { name: 'Gainers', path: '/gainers' },
  { name: 'Pre/Post Workout', path: '/pre-post-workout' },
  { name: 'Ayurveda', path: '/ayurveda' },
  { name: 'Fit Foods', path: '/fit-foods' },
  { name: 'Vitamins', path: '/vitamin' },
  { name: 'Fat Loss', path: '/fat-loss' },
  { name: 'Accessories', path: '/accessories' }
];

const CategoriesGrid = () => {
  return (
    <>
      <div className="header">
        <h1 className="logo">
          Flex<span className="white-text">Fuels</span>
          <p className="tagline">...a one stop solution for optimum nutrition</p>
        </h1>
      </div>
      <h1 className="categories-title">Categories</h1>
      <div className="categories-container">
        {categories.map((category, index) => (
          <Link key={index} to={category.path} className="category-link">
            <div className="category-item">
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoriesGrid;

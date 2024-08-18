import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import beginnerImage from '../images/beginner.jpg';
import intermediateImage from '../images/intermediate.jpg';
import advancedImage from '../images/advanced.jpg';
import poster1 from '../images/poster1.jpg';
import poster2 from '../images/poster2.jpg';
import poster3 from '../images/poster3.jpg';
import { Cart } from 'react-bootstrap-icons';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

export function Home() {
    const navigate = useNavigate();

    const logIn = async () => {
        navigate('/');
    };

    const category = async () => {
        navigate('/category');
    };

    const goToCart = async () => {
        navigate('/cart');
    };

    // Poster images array
    const posterImages = [poster1, poster2, poster3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % posterImages.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [posterImages.length]);

    return (
        <div className="home-container">
            <div className="header">
                <div className="logo-section">
                    <h1 className="logo">
                        Flex<span className="white-text">Fuels</span>
                        <p className="tagline">...a one stop solution for optimum nutrition</p>
                    </h1>
                </div>
                <div className="header-bottom">
                    <InputGroup className="search-bar">
                        <FormControl
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-button"
                        />
                        <Button variant="outline-secondary" id="search-button">
                            <Search />
                        </Button>
                    </InputGroup>
                    <button onClick={goToCart} className="cart-button">
                        <Cart size={24} /> {/* React Bootstrap Cart icon */}
                    </button>
                    <Button onClick={logIn} variant="primary" className="login-signup-button">
                        Login
                    </Button>
                </div>
            </div>

            <div className="poster">
                <img
                    src={posterImages[currentImageIndex]}
                    alt="Poster"
                    className="poster-image"
                />
            </div>

            <div className="categories-section">
                <button className="category-button">Best Seller</button>
                <button onClick={category} className="category-button">Categories</button>
            </div>

            <section className="shop-by-level">
                <h2>Shop by Level</h2>
                <div className="level-buttons">
                    <div className="level-image-container">
                        <img src={beginnerImage} alt="Beginner Level" className="level-image" />
                        <div className="level-overlay">Beginner</div>
                    </div>
                    <div className="level-image-container">
                        <img src={intermediateImage} alt="Intermediate Level" className="level-image" />
                        <div className="level-overlay">Intermediate</div>
                    </div>
                    <div className="level-image-container">
                        <img src={advancedImage} alt="Advanced Level" className="level-image" />
                        <div className="level-overlay">Advanced</div>
                    </div>
                </div>
            </section>

            <section className="shop-by-brand">
                <h2>Shop by Brand</h2>
                <div className="brand-buttons">
                    <img src="brand1.jpg" alt="Brand 1" className="brand-image" />
                    <img src="brand2.jpg" alt="Brand 2" className="brand-image" />
                    <img src="brand3.jpg" alt="Brand 3" className="brand-image" />
                </div>
            </section>
        </div>
    );
}

export default Home;

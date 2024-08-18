import React, { useState } from 'react';
import './ProductPage.css';
import protein1 from '../images/protein1.jpg';
import protein2 from '../images/protein2.jpg';
import protein3 from '../images/protein3.jpg';

const ProductPage = () => {
    const product = {
        name: 'Flex Fuel Protein Powder',
        price: 49.99,
        description: 'A high-quality protein powder designed for athletes and fitness enthusiasts.',
        images: [protein1, protein2, protein3],
        specifications: 'Size: 2 lbs, Flavor: Chocolate, Servings: 30',
        vendor: {
            name: 'Flex Fuels Vendor',
            contact: 'vendor@flexfuels.com'
        },
        relatedProducts: [
            { name: 'Flex Fuel Pre-Workout' },
            { name: 'Flex Fuel Creatine' },
            { name: 'Flex Fuel BCAA' }
        ],
        averageRating: 4.7,
        reviews: [
            { user: 'John Doe', rating: 5, comment: 'Great taste and results!' },
            { user: 'Jane Smith', rating: 4, comment: 'Good, but a bit pricey.' }
        ]
    };

    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    const handleAddToCart = () => {
        // Add product to cart logic
        console.log('Added to cart:', product.name);
    };

    const handleBuyNow = () => {
        // Buy now logic
        console.log('Buying now:', product.name);
    };

    const pageStyle = {
        '--main-bg-color': '#282c34',
        '--text-color': '#f9f9f9',
        '--secondary-text-color': '#bbb',
    };

    return (
        <div className="product-page" style={pageStyle}>
            <h1>{product.name}</h1>
            <div className="product-images">
                <img src={selectedImage} alt={product.name} className="main-image" />
                <div className="image-gallery">
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${product.name} ${index + 1}`}
                            onClick={() => setSelectedImage(image)}
                            className={image === selectedImage ? 'selected' : ''}
                        />
                    ))}
                </div>
            </div>
            <p className="price">₹{product.price}</p>
            <p className="description">{product.description}</p>
            <p className="specifications">{product.specifications}</p>
            <div className="vendor">
                <p><strong>Vendor:</strong> {product.vendor.name}</p>
                <p><strong>Contact:</strong> {product.vendor.contact}</p>
            </div>

            <div className="product-actions">
                <button className="btn btn-cart" onClick={handleAddToCart}>Add to Cart</button>
                <button className="btn btn-buy" onClick={handleBuyNow}>Buy Now</button>
            </div>

            <div className="related-products">
                <h3>Related Products</h3>
                <ul>
                    {product.relatedProducts.map((relatedProduct, index) => (
                        <li key={index}>{relatedProduct.name}</li>
                    ))}
                </ul>
            </div>

            <div className="reviews">
                <h3>Customer Reviews</h3>
                {product.reviews.map((review, index) => (
                    <div key={index} className="review-item">
                        <p className="review-user">{review.user}</p>
                        <p className="review-rating">Rating: {review.rating}/5</p>
                        <p className="review-comment">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;

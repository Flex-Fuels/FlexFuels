import React, { useState } from 'react';
import './Vendor.css';
import { toast } from 'react-toastify';

const categories = [
    'Proteins',
    'Gainers',
    'Pre/Post Workout',
    'Ayurveda',
    'Fit Foods',
    'Vitamins',
    'Fat Loss',
    'Accessories'
  ];

const VendorPanel = () => {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [productImage, setProductImage] = useState(null);

    const handleAddProduct = () => {
        if (productName.trim() && productPrice.trim() && productImage) {
            const newProduct = {
                name: productName,
                price: productPrice,
                description: productDescription,
                category: selectedCategory,
                image: URL.createObjectURL(productImage)
            };
            setProducts([...products, newProduct]);
            setProductName('');
            setProductPrice('');
            setProductDescription('');
            setSelectedCategory('');
            setProductImage(null);
        } else {
            toast.warn('Please enter product name, price, and select a category.');
        }
    };

    const handleDeleteProduct = (index) => {
        setProducts(products.filter((_, i) => i !== index));
    };

    const handleImageChange = (e) => {
        setProductImage(e.target.files[0]);
    };

    return (
        <>
            <div className="header">
                <h1 className="logo">
                    Flex<span className="white-text">Fuels</span>
                    <p className="tagline">...a one-stop solution for optimum nutrition</p>
                </h1>
                
            </div>

            <div className="vendor-container">
                <h2 className="vendor-title">Vendor Panel</h2>

                {/* Add Product Form */}
                <div className="add-product-form">
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="Product Name"
                        className="input-field"
                    />
                    <input
                        type="text"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        placeholder="Product Price"
                        className="input-field"
                    />
                    <input
                        type="text"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        placeholder="Product Description"
                        className="input-field"
                    />
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="category-dropdown"
                    >
                        <option value="">Select Category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                    <input
                    type="file"
                    onChange={handleImageChange}
                    style={{ marginRight: '10px', padding: '5px' }}
                    />
                    
                </div>
                <button onClick={handleAddProduct} className="add-button">
                        Add Product
                    </button>

                {/* Display Products with Delete Option */}
                <ul className="product-list">
                    {products.map((product, index) => (
                        <li key={index} className="product-item">
                            <div className="product-info">
                                <strong>{product.name}</strong> - ₹{product.price}
                                <p>{product.description}</p>
                                <p>Category: {product.category}</p>
                            </div>
                            <button 
                                onClick={() => handleDeleteProduct(index)} 
                                className="delete-button"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default VendorPanel;

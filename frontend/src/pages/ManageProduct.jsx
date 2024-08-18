import React, { useState } from 'react';
import './ManageProduct.css';

const ManageProducts = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Protein Powder', price: 29.99, description: 'High-quality protein powder.' },
        { id: 2, name: 'Yoga Mat', price: 19.99, description: 'Durable yoga mat for all workouts.' }
    ]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });
    const [editProduct, setEditProduct] = useState(null);

    const handleAddProduct = () => {
        if (newProduct.name && newProduct.price) {
            if (editProduct !== null) {
                const updatedProducts = products.map(product =>
                    product.id === editProduct.id ? { ...newProduct, id: editProduct.id } : product
                );
                setProducts(updatedProducts);
                setEditProduct(null);
            } else {
                setProducts([...products, { ...newProduct, id: products.length + 1 }]);
            }
            setNewProduct({ name: '', price: '', description: '' });
        } else {
            alert('Please enter product name and price.');
        }
    };

    const handleEditProduct = (product) => {
        setNewProduct({ name: product.name, price: product.price, description: product.description });
        setEditProduct(product);
    };

    const handleDeleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    return (
        <div className="manage-products-container">
            <h2 className="manage-products-title">Manage Products</h2>

            {/* Add/Edit Product Form */}
            <div className="add-product-form">
                <h3>{editProduct ? 'Edit Product' : 'Add New Product'}</h3>
                <input
                    type="text"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    placeholder="Product Name"
                />
                <input
                    type="number"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    placeholder="Product Price"
                />
                <textarea
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    placeholder="Product Description"
                />
                <button onClick={handleAddProduct}>
                    {editProduct ? 'Update Product' : 'Add Product'}
                </button>
            </div>

            {/* Product List */}
            <div className="product-list">
                <h3>Existing Products</h3>
                <ul>
                    {products.map(product => (
                        <li key={product.id} className="product-item">
                            <div className="product-info">
                                <strong>{product.name}</strong> - ₹{product.price}
                                <p>{product.description}</p>
                            </div>
                            <div className="product-actions">
                                <button onClick={() => handleEditProduct(product)} className="edit-button">
                                    Edit
                                </button>
                                <button onClick={() => handleDeleteProduct(product.id)} className="delete-button">
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ManageProducts;

import React, { useState } from 'react';
import './CartPanel.css';

const CartPanel = () => {
    const [cartItems, setCartItems] = useState([
        { name: 'Protein Powder', price: 29.99, quantity: 2 },
        { name: 'Yoga Mat', price: 19.99, quantity: 1 }
    ]);

    const handleRemoveItem = (index) => {
        setCartItems(cartItems.filter((_, i) => i !== index));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <>
        <div className="header">
        <h1 className="logo">
            Flex<span className="white-text">Fuels</span>
            <p className="tagline">...a one-stop solution for optimum nutrition</p>
        </h1>
       </div>
        <div className="cart-container">
            <h2 className="cart-title">Shopping Cart</h2>

            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p className="empty-cart">Your cart is empty.</p>
                ) : (
                    <ul className="cart-list">
                        {cartItems.map((item, index) => (
                            <li key={index} className="cart-item">
                                <div className="item-info">
                                    <strong>{item.name}</strong> - ₹{item.price} x {item.quantity}
                                </div>
                                <button
                                    onClick={() => handleRemoveItem(index)}
                                    className="remove-button"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="cart-summary">
                <div className="total">
                    <strong>Total:</strong> ₹{calculateTotal()}
                </div>
                <button className="checkout-button">Proceed to Checkout</button>
            </div>
        </div>
        </>
    );
};

export default CartPanel;

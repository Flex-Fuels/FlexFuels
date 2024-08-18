import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.css';
//import ManageProducts from './ManageProduct';

export function AdminPanel() {
    const navigate = useNavigate();

    const ManageProduct = async () => {
        navigate('/manage-product');
    };

    const ManageVendor = async () => {
        navigate('/manage-vendor');
    };

    const ManageUser = async () => {
        navigate('/manage-user');
    };

    return (
    
        <>
            <div className="header">
                <h1 className="logo">
                    Flex<span className="white-text">Fuels</span>
                    <p className="tagline">...a one-stop solution for optimum nutrition</p>
                </h1>
            </div>

            <div className="admin-container">
                <h2 className="admin-title">Admin Panel</h2>

                <div className="admin-actions">
                    <button onClick={ManageProduct} className="admin-button manage-products-button">
                        Manage Products
                    </button>
                    <button onClick={ManageVendor} className="admin-button manage-vendors-button">
                        Manage Vendors
                    </button>
                    <button onClick={ManageUser} className="admin-button delete-products-button">
                        Manage Users
                    </button>
                </div>
            </div>
        </>
    );
};

export default AdminPanel;

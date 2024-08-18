import React, { useState } from 'react';
import './ManageVendor.css';

const ManageVendors = () => {
    const [vendors, setVendors] = useState([
        { id: 1, name: 'Vendor A', contact: '123-456-7890', email: 'vendorA@example.com' },
        { id: 2, name: 'Vendor B', contact: '987-654-3210', email: 'vendorB@example.com' }
    ]);
    const [newVendor, setNewVendor] = useState({ name: '', contact: '', email: '' });

    const handleAddVendor = () => {
        if (newVendor.name && newVendor.contact && newVendor.email) {
            setVendors([...vendors, { ...newVendor, id: vendors.length + 1 }]);
            setNewVendor({ name: '', contact: '', email: '' });
        } else {
            alert('Please enter all vendor details.');
        }
    };

    const handleDeleteVendor = (id) => {
        setVendors(vendors.filter(vendor => vendor.id !== id));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewVendor({ ...newVendor, [name]: value });
    };

    return (
        <div className="manage-vendors-container">
            <h2 className="manage-vendors-title">Manage Vendors</h2>

            {/* Add Vendor Form */}
            <div className="add-vendor-form">
                <h3>Add New Vendor</h3>
                <input
                    type="text"
                    name="name"
                    value={newVendor.name}
                    onChange={handleInputChange}
                    placeholder="Vendor Name"
                />
                <input
                    type="text"
                    name="contact"
                    value={newVendor.contact}
                    onChange={handleInputChange}
                    placeholder="Contact Number"
                />
                <input
                    type="email"
                    name="email"
                    value={newVendor.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                />
                <button onClick={handleAddVendor}>Add Vendor</button>
            </div>

            {/* Vendor List */}
            <div className="vendor-list">
                <h3>Existing Vendors</h3>
                <ul>
                    {vendors.map(vendor => (
                        <li key={vendor.id} className="vendor-item">
                            <div className="vendor-info">
                                <strong>{vendor.name}</strong><br />
                                Contact: {vendor.contact}<br />
                                Email: {vendor.email}
                            </div>
                            <button onClick={() => handleDeleteVendor(vendor.id)} className="delete-button">
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ManageVendors;

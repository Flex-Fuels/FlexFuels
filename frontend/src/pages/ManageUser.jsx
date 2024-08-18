import React, { useState } from 'react';
import './ManageUser.css';

const ManageUsers = () => {
    const [users, setUsers] = useState([
        { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
    ]);

    const handleDeleteUser = (index) => {
        if (users[index].role === 'Admin') {
            alert('Admin user cannot be deleted.');
            return;
        }
        setUsers(users.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className="header">
                <h1 className="logo">
                    Flex<span className="white-text">Fuels</span>
                    <p className="tagline">...a one-stop solution for optimum nutrition</p>
                </h1>
            </div>
            <div className="manage-users-container">
                <h2 className="page-title">Manage Users</h2>
                <div className="users-list">
                    {users.length === 0 ? (
                        <p className="no-users">No users to display.</p>
                    ) : (
                        <ul className="user-list">
                            {users.map((user, index) => (
                                <li key={index} className="user-item">
                                    <div className="user-info">
                                        <strong>{user.name}</strong> - {user.email} - {user.role}
                                    </div>
                                    <div className="user-actions">
                                        {user.role !== 'Admin' && (
                                            <button
                                                onClick={() => handleDeleteUser(index)}
                                                className="delete-button"
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};

export default ManageUsers;

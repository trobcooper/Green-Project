// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // You can create this file for styles

const Header = () => {
    return (
        <header>
            <h1>Sustainable Shopping Guide</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shopping-list">Shopping List</Link></li>
                    <li><Link to="/reviews">Community Reviews</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

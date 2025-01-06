// src/pages/HomePage.js
import React from 'react';
import ProductSearch from '../components/ProductSearch';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
    const handleSearch = (query) => {
        console.log('Searching for:', query);
        // Implement search logic here
    };

    const sampleProduct = {
        name: 'Eco-Friendly Shampoo',
        sustainabilityScore: 85,
    };

    return (
        <div>
            <h2>Welcome to the Sustainable Shopping Guide</h2>
            <ProductSearch onSearch={handleSearch} />
            <ProductCard product={sampleProduct} />
        </div>
    );
};

export default HomePage;

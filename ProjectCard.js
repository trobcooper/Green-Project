// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>Sustainability Score: {product.sustainabilityScore}</p>
            {/* Add more product details as needed */}
        </div>
    );
};

export default ProductCard;

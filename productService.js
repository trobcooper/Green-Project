// src/services/productService.js
const products = [
    { id: 1, name: 'Eco-Friendly Shampoo', sustainabilityScore: 85 },
    { id: 2, name: 'Biodegradable Soap', sustainabilityScore: 90 },
];

export const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};


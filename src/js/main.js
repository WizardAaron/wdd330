// Main entry point for the Sleep Outside application
// This file handles the homepage functionality

import ProductData from "./ProductData.mjs";
import ProductList from './ProductList.mjs';
import { loadHeaderFooter } from "./utils.mjs";

// Load header and footer if they exist
// loadHeaderFooter();

// Initialize product data
const productData = new ProductData("tents");
const listElement = document.querySelector("#product-list");

// Optional: Add any homepage-specific functionality here
console.log("Sleep Outside homepage loaded successfully");


// Create an instance of ProductList
const productList = new ProductList("tents", productData, listElement);

// Load and render products
productList.init();

// Example: You could add featured product loading, search functionality, etc.
// For now, the homepage is static content from index.html
// Main entry point for the Sleep Outside application
// This file handles the homepage functionality

import ProductData from "./ProductData.mjs";
import { loadHeaderFooter } from "./utils.mjs";

// Load header and footer if they exist
// loadHeaderFooter();

// Initialize product data
const productData = new ProductData("tents");

// Optional: Add any homepage-specific functionality here
console.log("Sleep Outside homepage loaded successfully");

// Example: You could add featured product loading, search functionality, etc.
// For now, the homepage is static content from index.html
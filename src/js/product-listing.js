// Main entry point for the Sleep Outside application
// This file handles the homepage functionality

import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { qs } from "./utils.mjs";

// Initialize product data
const productData = new ProductData("tents");

// Get the product list element from the page
const productListElement = qs(".product-list");
z;
// Create an instance of ProductList
const productList = new ProductList("tents", productData, productListElement);

// Initialize the product list (this will fetch and display the products)
productList.init();

console.log("Sleep Outside homepage loaded successfully");

// Product listing page functionality
// This file handles displaying the product list

import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");

// Update the page title with the category
function updateTitle(category) {
  // Convert category to title case (e.g., "sleeping-bags" -> "Sleeping Bags")
  const categoryTitle = category
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  // Update the h2 heading
  const titleElement = document.querySelector(".products h2");
  if (titleElement) {
    titleElement.textContent = `Top Products: ${categoryTitle}`;
  }
}

// Update the title with the category
updateTitle(category);

// first create an instance of the ProductData class.
const dataSource = new ProductData();
// then get the element you want the product list to render in
const listElement = document.querySelector(".product-list");
// then create an instance of the ProductList class and send it the correct information.
const myList = new ProductList(category, dataSource, listElement);
// finally call the init method to show the products
myList.init();
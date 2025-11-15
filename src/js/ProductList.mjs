function productCardTemplate(product) {
  return `
  <li class="product-card">
    <a href="product_pages/product-details.html?product=${product.Id}">
      <img src="${product.Image}" alt="Image of ${product.Name}">
      <h2 class="card__brand">${product.Brand.Name}</h2>
      <h3 class="card__name">${product.NameWithoutBrand}</h3>
      <p class="product-card__price">$${product.FinalPrice}</p>
    </a>
  </li>`;
}


export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.products = [];
  }

  async init() {
    // Load all products
    const allProducts = await this.dataSource.getData();
    
    // Filter by category
    this.products = allProducts.filter(item => item.Category === this.category);
    
    // Render the filtered list
    this.renderList(this.products);
  }

  // NEW: renderList takes a product list argument
  renderList(productList) {
    this.listElement.innerHTML = productList
      .map(product => productCardTemplate(product))
      .join("");
  }
}

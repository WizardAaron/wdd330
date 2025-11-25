const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ExternalServices {
  constructor() {
  }
  async getData(category) {
    const response = await fetch(`${baseURL}products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async findProductById(id) {
    const response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async searchProducts(searchTerm) {
    const response = await fetch(`${baseURL}products/search/${searchTerm}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async getAllProducts() {
    // Fetch products from all categories
    const categories = ['tents', 'backpacks', 'sleeping-bags', 'hammocks'];
    const allProducts = [];
    
    for (const category of categories) {
      try {
        const products = await this.getData(category);
        allProducts.push(...products);
      } catch (error) {
        console.error(`Error fetching ${category}:`, error);
      }
    }
    
    return allProducts;
  }
  filterProductsBySearch(products, searchTerm) {
    const lowerSearch = searchTerm.toLowerCase();
    return products.filter(product => {
      // Normalize text by replacing hyphens with spaces for better matching
      const normalizeName = product.Name?.toLowerCase().replace(/-/g, ' ') || '';
      const normalizeNameWithoutBrand = product.NameWithoutBrand?.toLowerCase().replace(/-/g, ' ') || '';
      const normalizeBrand = product.Brand?.Name?.toLowerCase().replace(/-/g, ' ') || '';
      const normalizeCategory = product.Category?.toLowerCase().replace(/-/g, ' ') || '';
      
      return (
        normalizeName.includes(lowerSearch) ||
        normalizeNameWithoutBrand.includes(lowerSearch) ||
        normalizeBrand.includes(lowerSearch) ||
        normalizeCategory.includes(lowerSearch)
      );
    });
  }
}

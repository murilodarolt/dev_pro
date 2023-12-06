  function sortProducts(products, sort_key, ascending) {
    if (!products.length || !products.every(product => sort_key in product)) {
      console.error("Invalid sort key or empty product list");
      return [];
    }
  
    return products.sort((a, b) => {
      if (ascending) {
        return a[sort_key] > b[sort_key] ? 1 : -1;
      } else {
        return a[sort_key] < b[sort_key] ? 1 : -1;
      }
    });
  }

  module.exports = sortProducts;
const products = require('./products')
const sortProducts = require('./sortProducts')

let sortedProducts = sortProducts(products, "name", true);
console.log(sortedProducts);

sortedProducts = sortProducts(products, "name", false);
console.log(sortedProducts);

sortedProducts = sortProducts(products, "price", true);
console.log(sortedProducts);

sortedProducts = sortProducts(products, "price", false);
console.log(sortedProducts);

sortedProducts = sortProducts(products, "stock", true);
console.log(sortedProducts);

sortedProducts = sortProducts(products, "stock", false);
console.log(sortedProducts);
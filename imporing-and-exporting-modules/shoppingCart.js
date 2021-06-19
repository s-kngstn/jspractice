// Exporting Module
console.log('Exporting module');

export function saySomething(input, yourName){
  console.log(input + ', my frand!, my name is ' + yourName);
}

// Variables declared inside of a module are scoped to this module, by default this means all variables 
// are private inside of this module
const shippingCost = 10;
export const cart = [];

 export const addToCart = function(product, quantity) {
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart.`);
}

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity}
// Importing Module
import './shoppingCart.js';
import { addToCart, saySomething, totalPrice as price, totalQuantity } from './shoppingCart.js';
import * as ShoppingCart from './shoppingCart.js';
console.log('Importing Module');
// console.log(shippingCost);

// const myName = 'Sam';


// saySomething('Heyoo whats up', myName);

// addToCart("T-Shirts", totalQuantity);

// console.log(price);
ShoppingCart.addToCart('bread', 3);
ShoppingCart.addToCart('bread', 5);
ShoppingCart.addToCart('bread', 2);
console.log(ShoppingCart.cart);
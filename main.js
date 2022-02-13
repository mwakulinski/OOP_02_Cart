const { CartItem, Cart } = require("./cart");

const cartItem1 = new CartItem("Czekolada", ["Jedzenie", "Słodycze"], 900);
const cartItem2 = new CartItem("Jabłko", ["Jedzenie", "Owoc"], 15);
const cartItem3 = new CartItem("Brzowskwinia", ["Jedzenie", "Owoc"], 30);
cartItem1.addItemCategory("Zdrowe");
// console.log(cartItem1);

const cart = new Cart();
cart.addItem(cartItem1);
// console.log(cart.totalPrice);
cart.addItem(cartItem2);
// console.log(cart.totalPrice);
// console.log(cart);
cart.setDiscountCode("Fruit10");
console.log(cart.totalPrice);
cart.addItem(cartItem3);
console.log(cart.totalPrice);
cart.setDiscountCode("Fruit10");
console.log(cart.totalPrice);
cart.setDiscountCode("Fruit10");
console.log(cart.totalPrice);
cart.setDiscountCode("All15");
cart.setDiscountCode("All15");
console.log(cart.totalPrice);

console.log(cart);

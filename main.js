const CartItem = require("./cart-item");
const Cart = require("./cart");

const discounts = [
  {
    name: "Fruit10",
    category: "Owoc",
    valueInPrecent: 10,
  },
  {
    name: "All15",
    category: "All",
    valueInPrecent: 15,
  },
  {
    name: "Czeko10",
    category: "Czekolada",
    valueInPrecent: 10,
  },
];

const cartItem1 = new CartItem("Czekolada", ["Jedzenie", "Słodycze"], 10, 5);
const cartItem2 = new CartItem("Jabłko", ["Jedzenie", "Owoc"], 15, 5);
const cartItem3 = new CartItem("Brzoskwinia", ["Jedzenie", "Owoc"], 10, 10);
cartItem1.addItemCategory("Zdrowe");

const cart = new Cart();
cart.addItem(cartItem1);
cart.addItem(cartItem2);
cart.addItem(cartItem3);
cart.setDiscountCodeToItems(discounts[1]);
cart.setDiscountCodeToItems(discounts[2]);
cart.deleteItem(cartItem1.id);
cart.calculatePrice();
cart.calculateDiscountInPrecent();

// cart.calculatePrice();
// cart.setDiscountCode("Fruit10");
// console.log(cart.totalPrice);
// cart.addItem(cartItem3);
// console.log(cart.totalPrice);
// cart.setDiscountCode("Fruit10");
// console.log(cart.totalPrice);
// cart.setDiscountCode("Fruit10");
// console.log(cart.totalPrice);
// cart.setDiscountCode("All15");
// cart.setDiscountCode("All15");
// console.log(cart.totalPrice);

console.log(cart);
// console.log(cartItem3);

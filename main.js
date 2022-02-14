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

const cartItem1 = new CartItem("Czekolada", 10, ["Jedzenie", "Słodycze"]);
const cartItem2 = new CartItem("Jabłko", 15, ["Jedzenie", "Owoc"]);
const cartItem3 = new CartItem("Brzoskwinia", 10, ["Jedzenie", "Owoc"]);
// cartItem1.addItemCategory("Zdrowe");
// cartItem1.setDiscountCode(discounts[1]);
// cartItem1.setDiscountCode(discounts[2]);
// cartItem1.calculateItemDiscount();
// cartItem1.calculateItemPriceAfterDiscount();
// console.log(cartItem1.discount);
// cartItem1.calculateItemPrice();
// console.log(cartItem1);

const cart = new Cart();
cart.addItem(cartItem1, 2);
cart.addItem(cartItem2, 1);
cart.addItem(cartItem3, 4);
cart.setDiscountCode(discounts[1]);
cart.setDiscountCode(discounts[2]);
cart.calculateItemsDiscounts();
cart.calculatePrice();
cart.calculateDiscountPrice();
cart.calculateCartDiscount();

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

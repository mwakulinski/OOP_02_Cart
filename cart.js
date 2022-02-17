const { v4: uuidv4 } = require("uuid");
const Validator = require("./validator");
const CartItem = require("./cart-item");

class Cart {
  constructor() {
    this.items = [];
    this.id = uuidv4();
  }

  addItem(cartItem) {
    Validator.throwIfNotPropreInstance(cartItem, CartItem);
    this.items.push(cartItem);
  }

  deleteItem(cartItemId) {
    Validator.throwIfNotProperType(cartItemId, "string");
    if (!this.findItemById(cartItemId)) {
      throw new Error("Such item is not in the cart");
    }
    this.items = this.items.filter((item) => item.id !== cartItemId);
  }

  setDiscountCodeToItems(discountCode) {
    this.items.forEach((cartItem) => {
      cartItem.setDiscountCode(discountCode);
    });
  }

  calculatePrice() {
    this.price = this.#calculatePriceWithDiscounts();
  }

  calculateDiscountInPrecent() {
    this.discount =
      100 -
      (this.#calculatePriceWithDiscounts() /
        this.#calculatePriceWithoutDiscounts()) *
        100;
  }

  #calculatePriceWithoutDiscounts() {
    return this.items.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity;
    }, 0);
  }

  #calculatePriceWithDiscounts() {
    return this.items.reduce((total, cartItem) => {
      return (
        total + cartItem.calculateItemPriceAfterDiscount() * cartItem.quantity
      );
    }, 0);
  }

  findItemById(cartItemId) {
    return this.items.some((item) => {
      return item.id === cartItemId;
    });
  }
}

module.exports = Cart;

const { v4: uuidv4 } = require("uuid");
const Validator = require("./validator");
const CartItem = require("./cart-item");

class Cart {
  #id;
  constructor() {
    this.items = [];
    this.cartDiscount = 0;
    this.#id = uuidv4();
    this.cartPrice = 0;
    this.discountCodes = [];
  }

  addItem(item, amount) {
    Validator.throwIfNotPropreInstance(item, CartItem);
    Validator.throwIfNotInt(amount);
    Validator.throwIfNumbrNonPositive(amount);
    this.items.push({ item: item, amount: amount });
  }

  setDiscountCode(discountCode) {
    if (!this.isDiscountUsed(discountCode)) {
      this.discountCodes.push(discountCode);
      this.items.forEach((cartItem) => {
        cartItem.item.setDiscountCode(discountCode);
      });
    }
  }

  calculateItemsDiscounts() {
    this.items.forEach((cartItem) => cartItem.item.calculateItemDiscount());
  }

  calculatePrice() {
    this.cartPrice = this.items.reduce((total, current) => {
      return total + current.item.price * current.amount;
    }, 0);
  }

  calculateDiscountPrice() {
    this.cartPriceAfterDiscount = this.items.reduce((total, current) => {
      return (
        total +
        current.item.discountPrice *
          (1 - current.item.discountInPrecent / 100) *
          current.amount
      );
    }, 0);
  }

  calculateCartDiscount() {
    this.cartDiscount =
      ((this.cartPrice - this.cartPriceAfterDiscount) / this.cartPrice) * 100;
  }

  //   setDiscountCode(discountCode) {}

  //   calculatePrice() {
  //     this.totalPrice = this.items.reduce((total, current) => {
  //       return (total += current.calculatePrice());
  //     }, 0);
  //   }

  //   calculateDiscount() {
  //     this.cartDiscount = `${
  //       100 - (this.totalPrice * 100) / this.#primaryPrice
  //     }%`;
  //   }

  isDiscountUsed(discountCode) {
    return this.discountCodes.some((discount) => discount === discountCode);
  }
}

module.exports = Cart;

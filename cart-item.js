const Item = require("./item");
const Validator = require("./validator");

class CartItem extends Item {
  constructor(name, categories, price, quantity) {
    super(name, categories);
    this.price = price;
    this.quantity = quantity;
    this.discounts = [];
  }

  set price(price) {
    Validator.throwIfNumbrNonPositive(price);
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set quantity(quantity) {
    Validator.throwIfNumbrNonPositive(quantity);
    Validator.throwIfNotInt(quantity);
    this._quantity = quantity;
  }

  get quantity() {
    return this._quantity;
  }

  setDiscountCode(discount) {
    if (
      !this.#isDiscountUsed(discount) &&
      this.#checkIfProductHaveDiscountCategory(discount)
    ) {
      this.discounts.push(discount);
    }
  }

  calculateItemPriceAfterDiscount() {
    return this.price * (this.#calculatePercentItemDiscount() / 100);
  }

  #calculatePercentItemDiscount() {
    return this.discounts.reduce((total, { valueInPrecent }) => {
      return total * ((100 - valueInPrecent) / 100);
    }, 100);
  }

  #isDiscountUsed(discountCode) {
    return this.discounts.some((discount) => discount === discountCode);
  }

  #checkIfProductHaveDiscountCategory(discount) {
    return this.categories.some((category) => category === discount.category);
  }
}

module.exports = CartItem;

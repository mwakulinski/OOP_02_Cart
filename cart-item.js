const { v4: uuidv4 } = require("uuid");
const Validator = require("./validator");

class CartItem {
  #id;
  constructor(name, price, category) {
    this._name = name;
    this._categories = [...category, name, "All"];
    this._price = price;
    this.discount = 0;
    this.#id = uuidv4();
    this.discounts = [];
  }

  set _name(name) {
    Validator.throwIfNotProperType(name, "string");
    this.name = name;
  }

  set _categories(category) {
    Validator.throwIfNotArr(category);
    Validator.checkIfHaveOnlyString(category);
    this.categories = [...category];
  }

  set _price(price) {
    Validator.throwIfNumbrNonPositive(price);
    this.price = price;
  }

  // set _amount(amount) {
  //   Validator.throwIfNumbrNonPositive(amount);
  //   Validator.throwIfNotInt(amount);
  //   this.price = price;
  // }

  get id() {
    return this.#id;
  }

  addItemCategory(category) {
    Validator.throwIfNotProperType(category, "string");
    this.throwIfProductHaveThisCategory(category);
    this.categories.push(category);
  }

  setDiscountCode(discount) {
    if (
      !this.isDiscountUsed(discount) &&
      this.chechIfProductHaveDiscountCategory(discount)
    ) {
      this.discounts.push(discount);
    }
  }

  calculateItemPrice() {
    this.price *= 1 - this.discount / 100;
  }
  //ustala cene po znizce, ustala jaka jest procentowa znizka i dodaje znizke do uzytych
  //calculatePrice()
  //{valueInPercent: number, category: string, name}

  calculateItemDiscount() {
    const discountValueArr = this.discounts.map(
      (discount) => discount.valueInPrecent
    );

    this.discount =
      100 -
      discountValueArr.reduce((total, currnet) => {
        return total * ((100 - currnet) / 100);
      }, 100);
  }

  isDiscountUsed(discountCode) {
    return this.discounts.some((discount) => discount === discountCode);
  }

  chechIfProductHaveDiscountCategory(discount) {
    return this.categories.some((category) => category === discount.category);
  }

  throwIfProductHaveThisCategory(newCategory) {
    if (this.categories.some((category) => category === newCategory)) {
      throw new Error(`This item already is in ${newCategory} category`);
    }
  }
}

module.exports = CartItem;

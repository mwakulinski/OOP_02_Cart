const { v4: uuidv4 } = require("uuid");
const Validator = require("./validator");

class CartItem {
  #id;
  #primaryPrice;
  constructor(name, category, price) {
    this._name = name;
    this.category = [...category, "All"];
    this._price = price;
    this.#primaryPrice = price;
    this.discount = 0;
    this.#id = uuidv4();
    this.discountCode = [];
  }

  set _name(value) {
    if (typeof value === "string") {
      this.name = value;
    }
  }

  set _price(value) {
    if (typeof value === "number") {
      this.price = value;
    }
  }

  get id() {
    return this.#id;
  }

  addItemCategory(category) {
    //czu juz jest w tej kategorii
    Validation.throwIfNotString(category);
    this.category.push(category);
  }

  setDiscountCode(discount) {
    if (!this.discountCode.some((item) => item === discount.name)) {
      this.discountCode.push(discount.name);
    }
  }

  //ustala cene po znizce, ustala jaka jest procentowa znizka i dodaje znizke do uzytych
  //calculatePrice()
  //{valueInPercent: number, category: string, name}
  setItemDiscount(discount) {
    //checkIsProductHaveDiscountCategory()
    //
    /*
    const isInArray = Utilities.findInArrByCategory(
      this.category,
      discount.category
    );
    if (
      Utilities.findInArrByCategory(this.category, discount.category) &&
      Utilities.doesNotExistInArr(this.discountCode, discount.name)
    ) {
      this.price = this.price * (1 - discount.value / 100);
      this.discount = `${100 - (this.price / this.#primaryPrice) * 100}%`;
      this.addUsedDiscountCode(discount);
    }
  }*/
  }
}

module.exports = { CartItem, Cart };

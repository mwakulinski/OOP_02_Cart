class Cart {
  #id;
  #primaryPrice;
  constructor() {
    this.item = [];
    this.cartDiscount = 0;
    this.#id = uuidv4();
    this.totalPrice = 0;
    this.discountCode = new Set();
  }

  setDiscountCode(discountCode) {
    //czy jest poprawny
    //ustawic
    const usedDiscundCode = Utilities.findInArrByName(discounts, discountCode);
    if (usedDiscundCode) {
      this.item.forEach((item) => item.setItemDiscount(usedDiscundCode));
      this.discountCode.add(usedDiscundCode.name);
    }
  }

  addItem(item) {
    //walidacja czy to item
    //amount?
    this.item.push(item);
  }

  calculatePrice() {
    this.totalPrice = this.items.reduce((total, current) => {
      return (total += current.calculatePrice());
    }, 0);
  }

  calculateDiscount() {
    this.cartDiscount = `${
      100 - (this.totalPrice * 100) / this.#primaryPrice
    }%`;
  }
}

class Utilities {
  static findInArrByName = (arr, phrase) => {
    return arr.find((item) => item.name === phrase);
  };

  static findInArrByCategory = (arr, phrase) => {
    return arr.find((item) => item === phrase);
  };

  static doesNotExistInArr = (arr, input) => {
    return !arr.some((item) => item === input);
  };
}

const discounts = [
  {
    name: "Fruit10",
    category: "Owoc",
    value: 10,
  },
  {
    name: "All15",
    category: "All",
    value: 15,
  },
];

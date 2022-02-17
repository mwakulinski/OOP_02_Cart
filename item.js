const Validator = require("./validator");
const { v4: uuidv4 } = require("uuid");

class Item {
  constructor(name, categories) {
    this.name = name;
    this.categories = [...categories, this.name, "All"];
    this.id = uuidv4();
  }

  set name(name) {
    Validator.throwIfNotProperType(name, "string");
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set categories(categories) {
    Validator.throwIfNotArr(categories);
    Validator.checkIfHaveOnlyStringsInArr(categories);
    this._categories = [...categories];
  }

  get categories() {
    return this._categories;
  }

  addItemCategory(category) {
    Validator.throwIfNotProperType(category, "string");
    this.#throwIfItemHaveThisCategory(category);
    this.categories.push(category);
  }

  #throwIfItemHaveThisCategory(newCategory) {
    if (this.categories.some((category) => category === newCategory)) {
      throw new Error(`This item already is in ${newCategory} category`);
    }
  }
}

module.exports = Item;

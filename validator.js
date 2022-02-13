class Validation {
  static throwIfNotString(input) {
    if (typeof input !== "string") {
      throw new Error("The new category must be a string");
    }
  }
}

module.exports = Validation;

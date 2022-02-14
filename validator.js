class Validator {
  static throwIfNotProperType(input, type) {
    if (typeof input !== type) {
      throw new Error(`The input data must be a ${type} type`);
    }
  }

  static throwIfNotPropreInstance(instance, classType) {
    if (!(instance instanceof classType)) {
      throw new Error(`${instance} must be the instance of ${classType.name}`);
    }
  }

  static checkIfHaveOnlyString(inputs) {
    if (
      inputs.some((input) => typeof input !== "string" || input.length === 0)
    ) {
      throw new Error("The input data must be a string type");
    }
  }

  static throwIfNotNumber(input) {
    if (typeof input !== "number") {
      throw new Error("The input data must be a number type");
    }
  }

  static throwIfNumbrNonPositive(input) {
    Validator.throwIfNotNumber(input);
    if (input <= 0) {
      throw new Error("Input value can not be nagative");
    }
  }

  static throwIfNotInt(input) {
    if (!Number.isInteger(input)) {
      throw new Error("Input data must be an integer");
    }
  }

  static throwIfNotArr(input) {
    if (!Array.isArray(input)) {
      throw new Error("The input data must be a array type");
    }
  }
}

module.exports = Validator;

class AbstractContact {
  constructor(params = null) {
    this.requestData = {};

    if (params !== null) {
      this.requestData = Object.assign({}, params);
    }
  }

  get() {
    this.requiredKey().forEach(requiredKey => {
      if (typeof this.requestData[requiredKey] === "undefined") {
        throw Error(`${requiredKey} is mandatory field.`);
      }
    });
    return this.requestData;
  }

  requiredKey() {
    throw new Error("requiredKey is not implemented");
  }
}

module.exports = AbstractContact;

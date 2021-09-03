class AbstractTemplate {
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
    this.requestData.type = this.type();
    return this.requestData;
  }

  type() {
    throw new Error("type is not implemented");
  }

  requiredKey() {
    throw new Error("requiredKey is not implemented");
  }
}

module.exports = AbstractTemplate;

const AbstractContentBuilder = require("./AbstractContentBuilder");

class WaTextContentBuilder extends AbstractContentBuilder {
  requiredKey() {
    return ["text"];
  }

  type() {
    return "text";
  }

  setText(val) {
    this.requestData.text = val;
    return this;
  }
}

module.exports = WaTextContentBuilder;

const BaseWaTemplate = require("./BaseWaTemplete");

class WaTextTemplate extends BaseWaTemplate {
  requiredKey() {
    return ["name", "language", "body_params"];
  }

  type() {
    return "text";
  }
}

module.exports = WaTextTemplate;

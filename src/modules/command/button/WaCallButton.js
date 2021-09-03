const BaseWaButton = require("./BaseWaButton");

class WaCallButton extends BaseWaButton {
  requiredKey() {
    return [];
  }

  type() {
    return "call";
  }
}

module.exports = WaCallButton;

const BaseWaButton = require("./BaseWaButton");

class WaQuickReply extends BaseWaButton {
  requiredKey() {
    return ["quick_reply"];
  }

  type() {
    return "quick_reply";
  }

  setQuickReply(val) {
    this.requestData.quick_reply = val;
    return this;
  }
}

module.exports = WaQuickReply;

const BaseWaButton = require("./BaseWaButton");

class WaUrlParameterButton extends BaseWaButton {
  requiredKey() {
    return ["url_parameter"];
  }

  type() {
    return "url";
  }

  setUrlParameter(val) {
    this.requestData.url_parameter = val;
    return this;
  }
}

module.exports = WaUrlParameterButton;

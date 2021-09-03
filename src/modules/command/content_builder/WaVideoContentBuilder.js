const BaseWaContentBuilder = require("./BaseWaRichMediaContentBuilder");

class WaVideoContentBuilder extends BaseWaContentBuilder {
  type() {
    return "video";
  }
}

module.exports = WaVideoContentBuilder;

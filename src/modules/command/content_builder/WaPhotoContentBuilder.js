const BaseWaContentBuilder = require("./BaseWaRichMediaContentBuilder");

class WaPhotoContentBuilder extends BaseWaContentBuilder {
  type() {
    return "photo";
  }
}

module.exports = WaPhotoContentBuilder;

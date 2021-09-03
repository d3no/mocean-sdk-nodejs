const BaseWaContentBuilder = require("./BaseWaRichMediaContentBuilder");

class WaStickerContentBuilder extends BaseWaContentBuilder {
  type() {
    return "sticker";
  }
}

module.exports = WaStickerContentBuilder;

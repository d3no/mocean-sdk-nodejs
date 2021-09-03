const BaseWaSendMc = require("./BaseWaSendMc");
const { WaStickerContentBuilder } = require("../content_builder");

class WaSendSticker extends BaseWaSendMc {
  content(contentBuilder) {
    if (contentBuilder instanceof WaStickerContentBuilder === false) {
      throw new Error(
        "contentBuilder must be instance of WaTextContentBuilder"
      );
    }
    this.requestData.content = contentBuilder.get();
    return this;
  }
}

module.exports = WaSendSticker;

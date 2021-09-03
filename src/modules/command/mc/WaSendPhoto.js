const BaseWaSendMc = require("./BaseWaSendMc");
const { WaPhotoContentBuilder } = require("../content_builder");

class WaSendPhoto extends BaseWaSendMc {
  content(contentBuilder) {
    if (contentBuilder instanceof WaPhotoContentBuilder === false) {
      throw new Error(
        "contentBuilder must be instance of WaTextContentBuilder"
      );
    }
    this.requestData.content = contentBuilder.get();
    return this;
  }
}

module.exports = WaSendPhoto;

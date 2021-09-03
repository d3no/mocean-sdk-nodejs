const BaseWaSendMc = require("./BaseWaSendMc");
const { WaVideoContentBuilder } = require("../content_builder");

class WaSendVideo extends BaseWaSendMc {
  content(contentBuilder) {
    if (contentBuilder instanceof WaVideoContentBuilder === false) {
      throw new Error(
        "contentBuilder must be instance of WaTextContentBuilder"
      );
    }
    this.requestData.content = contentBuilder.get();
    return this;
  }
}

module.exports = WaSendVideo;

const BaseWaSendMc = require("./BaseWaSendMc");
const { WaLocationContentBuilder } = require("../content_builder");

class WaSendLocation extends BaseWaSendMc {
  content(contentBuilder) {
    if (contentBuilder instanceof WaLocationContentBuilder === false) {
      throw new Error(
        "contentBuilder must be instance of WaTextContentBuilder"
      );
    }
    this.requestData.content = contentBuilder.get();
    return this;
  }
}

module.exports = WaSendLocation;

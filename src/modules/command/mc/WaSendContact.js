const BaseWaSendMc = require("./BaseWaSendMc");
const { WaContactContentBuilder } = require("../content_builder");

class WaSendContact extends BaseWaSendMc {
  content(contentBuilder) {
    if (contentBuilder instanceof WaContactContentBuilder === false) {
      throw new Error(
        "contentBuilder must be instance of WaTextContentBuilder"
      );
    }
    this.requestData.content = contentBuilder.get();
    return this;
  }
}

module.exports = WaSendContact;

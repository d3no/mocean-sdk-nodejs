const BaseWaSendMc = require("./BaseWaSendMc");
const { WaTextContentBuilder } = require("../content_builder");

class WaSendText extends BaseWaSendMc {
  content(contentBuilder) {
    if (contentBuilder instanceof WaTextContentBuilder === false) {
      throw new Error(
        "contentBuilder must be instance of WaTextContentBuilder"
      );
    }
    this.requestData.content = contentBuilder.get();
    return this;
  }
}

module.exports = WaSendText;

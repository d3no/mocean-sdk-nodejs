const BaseWaSendMc = require("./BaseWaSendMc");
const { WaDocumentContentBuilder } = require("../content_builder");

class WaSendDocument extends BaseWaSendMc {
  content(contentBuilder) {
    if (contentBuilder instanceof WaDocumentContentBuilder === false) {
      throw new Error(
        "contentBuilder must be instance of WaTextContentBuilder"
      );
    }
    this.requestData.content = contentBuilder.get();
    return this;
  }
}

module.exports = WaSendDocument;

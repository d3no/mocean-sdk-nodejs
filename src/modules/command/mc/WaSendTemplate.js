const BaseWaSendMc = require("./BaseWaSendMc");
const { WaTemplateContentBuilder } = require("../content_builder");

class WaSendTemplate extends BaseWaSendMc {
  content(contentBuilder) {
    if (contentBuilder instanceof WaTemplateContentBuilder === false) {
      throw new Error(
        "contentBuilder must be instance of WaTextContentBuilder"
      );
    }
    this.requestData.content = contentBuilder.get();
    return this;
  }
}

module.exports = WaSendTemplate;

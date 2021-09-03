const BaseWaTemplate = require("./BaseWaTemplete");
const { WaDocumentContentBuilder } = require("../content_builder");

class WaDocumentTemplate extends BaseWaTemplate {
  requiredKey() {
    return ["name", "language", "body_params", "media_content"];
  }

  type() {
    return "document";
  }

  /**
   * @param {WaDocumentContentBuilder} content
   */
  setMediaContent(content) {
    if (content instanceof WaDocumentContentBuilder === false) {
      throw new Error("content must be instance of WaDocumentContentBuilder");
    }
    this.requestData.media_content = content.get();
    return this;
  }
}

module.exports = WaDocumentTemplate;

const BaseWaTemplate = require("./BaseWaTemplete");
const { WaContactContentBuilder } = require("../content_builder");

class WaContactTemplate extends BaseWaTemplate {
  requiredKey() {
    return ["name", "language", "body_params", "media_content"];
  }

  type() {
    return "contact_detail";
  }

  /**
   * @param {WaContactContentBuilder} content
   */
  setMediaContent(content) {
    if (content instanceof WaContactContentBuilder === false) {
      throw new Error("content must be instance of WaContactContentBuilder");
    }
    this.requestData.media_content = content.get();
    return this;
  }
}

module.exports = WaContactTemplate;

const BaseWaTemplate = require("./BaseWaTemplete");
const { WaVideoContentBuilder } = require("../content_builder");

class WaVideoTemplate extends BaseWaTemplate {
  requiredKey() {
    return ["name", "language", "body_params", "media_content"];
  }

  type() {
    return "video";
  }

  /**
   * @param {WaVideoContentBuilder} content
   */
  setMediaContent(content) {
    if (content instanceof WaVideoContentBuilder === false) {
      throw new Error("content must be instance of WaVideoContentBuilder");
    }
    this.requestData.media_content = content.get();
    return this;
  }
}

module.exports = WaVideoTemplate;

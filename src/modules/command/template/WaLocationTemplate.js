const BaseWaTemplate = require("./BaseWaTemplete");
const { WaLocationContentBuilder } = require("../content_builder");

class WaLocationTemplate extends BaseWaTemplate {
  requiredKey() {
    return ["name", "language", "body_params", "media_content"];
  }

  type() {
    return "location";
  }

  /**
   * @param {WaLocationContentBuilder} content
   */
  setMediaContent(content) {
    if (content instanceof WaLocationContentBuilder === false) {
      throw new Error("content must be instance of WaLocationContentBuilder");
    }
    this.requestData.media_content = content.get();
    return this;
  }
}

module.exports = WaLocationTemplate;

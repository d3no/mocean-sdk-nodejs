const BaseWaTemplate = require("./BaseWaTemplete");
const { WaPhotoContentBuilder } = require("../content_builder");

class WaPhotoTemplate extends BaseWaTemplate {
  requiredKey() {
    return ["name", "language", "body_params", "media_content"];
  }

  type() {
    return "photo";
  }

  /**
   * @param {WaPhotoContentBuilder} content
   */
  setMediaContent(content) {
    if (content instanceof WaPhotoContentBuilder === false) {
      throw new Error("content must be instance of WaPhotoContentBuilder");
    }
    this.requestData.media_content = content.get();
    return this;
  }
}

module.exports = WaPhotoTemplate;

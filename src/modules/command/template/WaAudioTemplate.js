const BaseWaTemplate = require("./BaseWaTemplete");
const { WaAudioContentBuilder } = require("../content_builder");

class WaAudioTemplate extends BaseWaTemplate {
  requiredKey() {
    return ["name", "language", "body_params", "media_content"];
  }

  type() {
    return "audio";
  }

  /**
   * @param {WaAudioContentBuilder} content
   */
  setMediaContent(content) {
    if (content instanceof WaAudioContentBuilder === false) {
      throw new Error("content must be instance of WaAudioContentBuilder");
    }
    this.requestData.media_content = content.get();
    return this;
  }
}

module.exports = WaAudioTemplate;

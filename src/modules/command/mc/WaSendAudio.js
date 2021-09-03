const BaseWaSendMc = require("./BaseWaSendMc");
const { WaAudioContentBuilder } = require("../content_builder");

class WaSendAudio extends BaseWaSendMc {
  content(contentBuilder) {
    if (contentBuilder instanceof WaAudioContentBuilder === false) {
      throw new Error(
        "contentBuilder must be instance of WaTextContentBuilder"
      );
    }
    this.requestData.content = contentBuilder.get();
    return this;
  }
}

module.exports = WaSendAudio;

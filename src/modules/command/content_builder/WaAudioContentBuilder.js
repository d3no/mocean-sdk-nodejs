const BaseWaContentBuilder = require("./BaseWaRichMediaContentBuilder");

class WaAudioContentBuilder extends BaseWaContentBuilder {
  type() {
    return "audio";
  }
}

module.exports = WaAudioContentBuilder;

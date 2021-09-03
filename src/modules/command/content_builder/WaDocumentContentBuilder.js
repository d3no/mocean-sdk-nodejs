const BaseWaContentBuilder = require("./BaseWaRichMediaContentBuilder");

class WaDocumentContentBuilder extends BaseWaContentBuilder {
  type() {
    return "document";
  }
}

module.exports = WaDocumentContentBuilder;

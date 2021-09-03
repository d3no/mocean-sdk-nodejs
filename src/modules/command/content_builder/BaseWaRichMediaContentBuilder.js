const AbstractContentBuilder = require("./AbstractContentBuilder");

class BaseWaRichMediaContentBuilder extends AbstractContentBuilder {
  requiredKey() {
    return ["rich_media_url"];
  }

  setRichMediaUrl(val) {
    this.requestData.rich_media_url = val;
    return this;
  }

  setText(val) {
    this.requestData.text = val;
    return this;
  }
}

module.exports = BaseWaRichMediaContentBuilder;
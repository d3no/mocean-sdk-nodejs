const AbstractContentBuilder = require("./AbstractContentBuilder");
const BaseWaTemplate = require("../template/BaseWaTemplete");

class WaTemplateContentBuilder extends AbstractContentBuilder {
  type() {
    return "template";
  }

  requiredKey() {
    return ["wa_template"];
  }

  /**
   * @param {BaseWaTemplate} template
   */
  setWaTemplate(template) {
    if (template instanceof BaseWaTemplate === false) {
      throw new Error("template must be instance of any whatsapp template");
    }
    this.requestData.wa_template = template.get();
    return this;
  }
}

module.exports = WaTemplateContentBuilder;

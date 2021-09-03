const AbstractContentBuilder = require("./AbstractContentBuilder");
const WaContact = require("../contact/WaContact");

class WaContactContentBuilder extends AbstractContentBuilder {
  requiredKey() {
    return ["contact_detail"];
  }

  type() {
    return "contact_detail";
  }

  /**
   * @param {WaContact} contactDetail
   * @returns {WaContactContentBuilder}
   */
  setContactDetail(contactDetail) {
    if (contactDetail instanceof WaContact === false) {
      throw new Error("contactDetail must be instance of WaContact");
    }
    this.requestData.contact_detail = contactDetail.get();
    return this;
  }
}

module.exports = WaContactContentBuilder;

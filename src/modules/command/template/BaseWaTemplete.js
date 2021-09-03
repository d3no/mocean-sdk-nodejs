const AbstractTemplate = require("./AbstractTemplate");

class BaseWaTemplete extends AbstractTemplate {
  setName(val) {
    this.requestData.name = val;
    return this;
  }

  setLanguage(val) {
    this.requestData.language = val;
    return this;
  }

  /**
   * @param {Array.<string>} bodyParams
   */
  setBodyParams(bodyParams) {
    if (bodyParams instanceof Array === false) {
      throw new Error(`bodyParams must be Array.<string>`);
    }
    this.requestData.body_params = bodyParams;
    return this;
  }

  /**
   * @param {Array.<string>} headerParams
   */
  setHeaderParams(headerParams) {
    if (headerParams instanceof Array === false) {
      throw new Error(`bodyParams must be Array.<string>`);
    }
    this.requestData.header_params = headerParams;
    return this;
  }
}

module.exports = BaseWaTemplete;

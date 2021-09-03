const AbstractContact = require("./AbstractContact");

class WaContact extends AbstractContact {
  requiredKey() {
    return ["first_name", "last_name", "full_name", "phone_num"];
  }

  setFirstName(val) {
    this.requestData.first_name = val;
    return this;
  }

  setLastName(val) {
    this.requestData.last_name = val;
    return this;
  }

  setFullName(val) {
    this.requestData.full_name = val;
    return this;
  }

  setPhoneNum(val) {
    this.requestData.phone_num = val;
    return this;
  }
}

module.exports = WaContact;

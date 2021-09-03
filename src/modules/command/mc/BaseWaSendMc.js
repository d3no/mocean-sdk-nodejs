const AbstractMc = require("./AbstractMc");

class BaseWaSendMc extends AbstractMc {
  requiredKey() {
    return ["from", "to", "content"];
  }

  action() {
    return "send-whatsapp";
  }

  from(id, type = "bot_username") {
    this.requestData.from = {};
    this.requestData.from.type = type;
    this.requestData.from.id = id;
    return this;
  }

  to(id, type = "phone_num") {
    this.requestData.to = {};
    this.requestData.to.type = type;
    this.requestData.to.id = id;
    return this;
  }

  content() {
    throw new Error("setContent is not implemented");
    return this;
  }
}

module.exports = BaseWaSendMc;

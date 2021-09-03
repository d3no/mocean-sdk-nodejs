const chai = require("chai");

const { expect } = chai;
const { WaSendTemplate } = require("../../../../src/modules/command/mc/index");
const {
  WaTemplateContentBuilder
} = require("../../../../src/modules/command/content_builder/index");
const {
  WaTextTemplate
} = require("../../../../src/modules/command/template/index");

describe("wa_send_location Test", () => {
  beforeEach(() => {
    const template = new WaTextTemplate()
      .setName("name")
      .setLanguage("language")
      .setBodyParams(["body_params"]);
    this.content = new WaTemplateContentBuilder().setWaTemplate(template);
  });

  it("should return mc object", () => {
    const params = {
      action: "send-whatsapp",
      from: {
        type: "bot_username",
        id: "from"
      },
      to: {
        type: "phone_num",
        id: "to"
      },
      content: this.content.get()
    };
    let obj = new WaSendTemplate(params);

    expect(params).to.deep.eq(obj.get());

    obj = new WaSendTemplate();
    obj.from("from");
    obj.to("to");
    obj.content(this.content);

    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaSendTemplate();
    obj.from("from");
    obj.to("to");
    obj.content(this.content);

    expect(obj.get().action).to.eq("send-whatsapp");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaSendTemplate().get();
    }).to.throw();
  });
});

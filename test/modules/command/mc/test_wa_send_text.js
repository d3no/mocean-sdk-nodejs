const chai = require("chai");

const { expect } = chai;
const { WaSendText } = require("../../../../src/modules/command/mc/index");
const { WaTextContentBuilder } = require("../../../../src/modules/command/content_builder/index");

describe("wa_send_text Test", () => {
  beforeEach(()=> {
    this.content = new WaTextContentBuilder().setText("text");
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
    let obj = new WaSendText(params);

    expect(params).to.deep.eq(obj.get());

    obj = new WaSendText();
    obj.from("from");
    obj.to("to");
    obj.content(this.content);

    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaSendText();
    obj.from("from");
    obj.to("to");
    obj.content(this.content);

    expect(obj.get().action).to.eq("send-whatsapp");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaSendText().get();
    }).to.throw();
  });
});

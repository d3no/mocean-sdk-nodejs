const chai = require("chai");

const { expect } = chai;
const { WaSendSticker } = require("../../../../src/modules/command/mc/index");
const {
  WaStickerContentBuilder
} = require("../../../../src/modules/command/content_builder/index");

describe("wa_send_sticker Test", () => {
  beforeEach(() => {
    this.content = new WaStickerContentBuilder()
      .setText("text")
      .setRichMediaUrl("url");
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
    let obj = new WaSendSticker(params);

    expect(params).to.deep.eq(obj.get());

    obj = new WaSendSticker();
    obj.from("from");
    obj.to("to");
    obj.content(this.content);

    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaSendSticker();
    obj.from("from");
    obj.to("to");
    obj.content(this.content);

    expect(obj.get().action).to.eq("send-whatsapp");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaSendSticker().get();
    }).to.throw();
  });
});

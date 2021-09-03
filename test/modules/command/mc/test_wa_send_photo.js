const chai = require("chai");

const { expect } = chai;
const { WaSendPhoto } = require("../../../../src/modules/command/mc/index");
const {
  WaPhotoContentBuilder
} = require("../../../../src/modules/command/content_builder/index");

describe("wa_send_photo Test", () => {
  beforeEach(() => {
    this.content = new WaPhotoContentBuilder()
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
    let obj = new WaSendPhoto(params);

    expect(params).to.deep.eq(obj.get());

    obj = new WaSendPhoto();
    obj.from("from");
    obj.to("to");
    obj.content(this.content);

    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaSendPhoto();
    obj.from("from");
    obj.to("to");
    obj.content(this.content);

    expect(obj.get().action).to.eq("send-whatsapp");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaSendPhoto().get();
    }).to.throw();
  });
});

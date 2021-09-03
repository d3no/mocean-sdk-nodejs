const chai = require("chai");

const { expect } = chai;
const {
  WaStickerContentBuilder
} = require("../../../../src/modules/command/content_builder/index");

describe("whatsapp sticker content builder object Test", () => {
  it("should return button object", () => {
    const params = {
      type: "sticker",
      rich_media_url: "url",
      text: "text"
    };
    let obj = new WaStickerContentBuilder(params);
    expect(params).to.deep.eq(obj.get());

    obj = new WaStickerContentBuilder();
    obj.setText("text");
    obj.setRichMediaUrl("url");
    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaStickerContentBuilder();
    obj.setText("text");
    obj.setRichMediaUrl("url");
    expect(obj.get().type).to.eq("sticker");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaStickerContentBuilder().get();
    }).to.throw();
  });
});

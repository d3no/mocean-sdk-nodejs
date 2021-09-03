const chai = require("chai");

const { expect } = chai;
const {
  WaVideoContentBuilder
} = require("../../../../src/modules/command/content_builder/index");

describe("whatsapp video content builder object Test", () => {
  it("should return button object", () => {
    const params = {
      type: "video",
      rich_media_url: "url",
      text: "text"
    };
    let obj = new WaVideoContentBuilder(params);
    expect(params).to.deep.eq(obj.get());

    obj = new WaVideoContentBuilder();
    obj.setText("text");
    obj.setRichMediaUrl("url");
    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaVideoContentBuilder();
    obj.setText("text");
    obj.setRichMediaUrl("url");
    expect(obj.get().type).to.eq("video");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaVideoContentBuilder().get();
    }).to.throw();
  });
});

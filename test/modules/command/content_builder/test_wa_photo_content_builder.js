const chai = require("chai");

const { expect } = chai;
const {
  WaPhotoContentBuilder
} = require("../../../../src/modules/command/content_builder/index");

describe("whatsapp photo content builder object Test", () => {
  it("should return button object", () => {
    const params = {
      type: "photo",
      rich_media_url: "url",
      text: "text"
    };
    let obj = new WaPhotoContentBuilder(params);
    expect(params).to.deep.eq(obj.get());

    obj = new WaPhotoContentBuilder();
    obj.setText("text");
    obj.setRichMediaUrl("url");
    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaPhotoContentBuilder();
    obj.setText("text");
    obj.setRichMediaUrl("url");
    expect(obj.get().type).to.eq("photo");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaPhotoContentBuilder().get();
    }).to.throw();
  });
});

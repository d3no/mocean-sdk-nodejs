const chai = require("chai");

const { expect } = chai;
const {
  WaDocumentContentBuilder
} = require("../../../../src/modules/command/content_builder/index");

describe("whatsapp document content builder object Test", () => {
  it("should return button object", () => {
    const params = {
      type: "document",
      rich_media_url: "url",
      text: "text"
    };
    let obj = new WaDocumentContentBuilder(params);
    expect(params).to.deep.eq(obj.get());

    obj = new WaDocumentContentBuilder();
    obj.setText("text");
    obj.setRichMediaUrl("url");
    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaDocumentContentBuilder();
    obj.setText("text");
    obj.setRichMediaUrl("url");
    expect(obj.get().type).to.eq("document");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaDocumentContentBuilder().get();
    }).to.throw();
  });
});

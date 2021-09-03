const chai = require("chai");

const { expect } = chai;
const {
  WaDocumentTemplate
} = require("../../../../src/modules/command/template/index");
const {
  WaDocumentContentBuilder
} = require("../../../../src/modules/command/content_builder/index");

describe("whatsapp document template object Test", () => {
  beforeEach(() => {
    this.content = new WaDocumentContentBuilder().setRichMediaUrl("url");
  });

  it("should return template object", () => {
    const params = {
      type: "document",
      name: "tname",
      language: "tlang",
      body_params: ["val1"],
      media_content: this.content.get()
    };
    let obj = new WaDocumentTemplate(params);

    expect(params).to.deep.eq(obj.get());

    obj = new WaDocumentTemplate();
    obj.setName("tname");
    obj.setLanguage("tlang");
    obj.setBodyParams(["val1"]);
    obj.setMediaContent(this.content);

    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaDocumentTemplate();
    obj.setName("tname");
    obj.setLanguage("tlang");
    obj.setBodyParams(["val1"]);
    obj.setMediaContent(this.content);

    expect(obj.get().type).to.eq("document");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaDocumentTemplate().get();
    }).to.throw();
  });
});

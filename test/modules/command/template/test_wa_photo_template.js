const chai = require("chai");

const { expect } = chai;

const {
  WaPhotoContentBuilder
} = require("../../../../src/modules/command/content_builder/index");
const {
  WaPhotoTemplate
} = require("../../../../src/modules/command/template/index");

describe("whatsapp photo template object Test", () => {
  beforeEach(() => {
    this.content = new WaPhotoContentBuilder().setRichMediaUrl("url");
  });

  it("should return template object", () => {
    const params = {
      type: "photo",
      name: "tname",
      language: "tlang",
      body_params: ["val1"],
      media_content: this.content.get()
    };
    let obj = new WaPhotoTemplate(params);

    expect(params).to.deep.eq(obj.get());

    obj = new WaPhotoTemplate();
    obj.setName("tname");
    obj.setLanguage("tlang");
    obj.setBodyParams(["val1"]);
    obj.setMediaContent(this.content);

    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaPhotoTemplate();
    obj.setName("tname");
    obj.setLanguage("tlang");
    obj.setBodyParams(["val1"]);
    obj.setMediaContent(this.content);

    expect(obj.get().type).to.eq("photo");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaPhotoTemplate().get();
    }).to.throw();
  });
});

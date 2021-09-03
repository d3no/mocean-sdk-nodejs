const chai = require("chai");

const { expect } = chai;
const {
  WaVideoTemplate
} = require("../../../../src/modules/command/template/index");
const {
  WaVideoContentBuilder
} = require("../../../../src/modules/command/content_builder/index");

describe("whatsapp document template object Test", () => {
  beforeEach(() => {
    this.content = new WaVideoContentBuilder().setRichMediaUrl("url");
  });

  it("should return template object", () => {
    const params = {
      type: "video",
      name: "tname",
      language: "tlang",
      body_params: ["val1"],
      media_content: this.content.get()
    };
    let obj = new WaVideoTemplate(params);

    expect(params).to.deep.eq(obj.get());

    obj = new WaVideoTemplate();
    obj.setName("tname");
    obj.setLanguage("tlang");
    obj.setBodyParams(["val1"]);
    obj.setMediaContent(this.content);

    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaVideoTemplate();
    obj.setName("tname");
    obj.setLanguage("tlang");
    obj.setBodyParams(["val1"]);
    obj.setMediaContent(this.content);

    expect(obj.get().type).to.eq("video");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaVideoTemplate().get();
    }).to.throw();
  });
});

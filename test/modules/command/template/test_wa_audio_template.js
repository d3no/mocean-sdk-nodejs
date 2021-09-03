const chai = require("chai");

const { expect } = chai;
const {
  WaAudioTemplate
} = require("../../../../src/modules/command/template/index");
const {
  WaAudioContentBuilder
} = require("../../../../src/modules/command/content_builder/index");

describe("whatsapp audio template object Test", () => {
  beforeEach(() => {
    this.content = new WaAudioContentBuilder().setRichMediaUrl("url");
  });

  it("should return template object", () => {
    const params = {
      type: "audio",
      name: "tname",
      language: "tlang",
      body_params: ["val1"],
      media_content: this.content.get()
    };
    let obj = new WaAudioTemplate(params);

    expect(params).to.deep.eq(obj.get());

    obj = new WaAudioTemplate();
    obj.setName("tname");
    obj.setLanguage("tlang");
    obj.setBodyParams(["val1"]);
    obj.setMediaContent(this.content);

    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaAudioTemplate();
    obj.setName("tname");
    obj.setLanguage("tlang");
    obj.setBodyParams(["val1"]);
    obj.setMediaContent(this.content);

    expect(obj.get().type).to.eq("audio");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaAudioTemplate().get();
    }).to.throw();
  });
});

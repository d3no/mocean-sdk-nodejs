const chai = require("chai");

const { expect } = chai;
const {
  WaAudioContentBuilder
} = require("../../../../src/modules/command/content_builder/index");

describe("whatsapp audio content builder object Test", () => {
  it("should return button object", () => {
    const params = {
      type: "audio",
      rich_media_url: "url",
      text: "text"
    };
    let obj = new WaAudioContentBuilder(params);
    expect(params).to.deep.eq(obj.get());

    obj = new WaAudioContentBuilder();
    obj.setText("text");
    obj.setRichMediaUrl("url");
    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaAudioContentBuilder();
    obj.setText("text");
    obj.setRichMediaUrl("url");
    expect(obj.get().type).to.eq("audio");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaAudioContentBuilder().get();
    }).to.throw();
  });
});

const chai = require("chai");

const { expect } = chai;
const {
  WaTextContentBuilder
} = require("../../../../src/modules/command/content_builder/index");

describe("whatsapp text content builder object Test", () => {
  it("should return button object", () => {
    const params = {
      type: "text",
      text: "text"
    };
    let obj = new WaTextContentBuilder(params);
    expect(params).to.deep.eq(obj.get());

    obj = new WaTextContentBuilder();
    obj.setText("text");
    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaTextContentBuilder();
    obj.setText("text");
    expect(obj.get().type).to.eq("text");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaTextContentBuilder().get();
    }).to.throw();
  });
});

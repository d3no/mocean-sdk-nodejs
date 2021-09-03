const chai = require("chai");

const { expect } = chai;
const {
  WaTextTemplate
} = require("../../../../src/modules/command/template/index");

describe("send_sms Test", () => {
  it("should return template object", () => {
    const params = {
      type: "text",
      name: "tname",
      language: "tlang",
      body_params: ["val1", "val2"]
    };
    let obj = new WaTextTemplate(params);

    expect(params).to.deep.eq(obj.get());

    obj = new WaTextTemplate();
    obj.setName("tname");
    obj.setLanguage("tlang");
    obj.setBodyParams(["val1", "val2"]);

    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaTextTemplate();
    obj.setName("tname");
    obj.setLanguage("tlang");
    obj.setBodyParams(["val1", "val2"]);

    expect(obj.get().type).to.eq("text");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaTextTemplate().get();
    }).to.throw();
  });
});

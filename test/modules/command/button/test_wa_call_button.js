const chai = require("chai");

const {expect} = chai;
const {WaCallButton} = require("../../../../src/modules/command/button/index");
const {WaContact} = require("../../../../src/modules/command/contact");

describe("whatsapp call button object Test", () => {
  it("should return button object", () => {
    const params = {
      type: "call"
    };
    let obj = new WaCallButton(params);

    expect(params).to.deep.eq(obj.get());

    obj = new WaCallButton();
    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define type", () => {
    const obj = new WaCallButton();
    expect(obj.get().type).to.eq("call");
  });
});

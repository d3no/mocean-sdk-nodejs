const chai = require("chai");

const { expect } = chai;
const {
  WaQuickReply
} = require("../../../../src/modules/command/button/index");

describe("whatsapp quick reply button object Test", () => {
  it("should return button object", () => {
    const params = {
      type: "quick_reply",
      quick_reply: "quick_reply"
    };
    let obj = new WaQuickReply(params);

    expect(params).to.deep.eq(obj.get());

    obj = new WaQuickReply();
    obj.setQuickReply("quick_reply");

    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaQuickReply();
    obj.setQuickReply("quick_reply");
    expect(obj.get().type).to.eq("quick_reply");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaQuickReply().get();
    }).to.throw();
  });
});

const chai = require("chai");

const { expect } = chai;
const { WaUrlParameterButton } = require("../../../../src/modules/command/button/index");

describe("whatsapp url parameter button object Test", () => {
  it("should return button object", () => {
    const params = {
      type: "url",
      url_parameter: "url_parameter"
    };
    let obj = new WaUrlParameterButton(params);
    expect(params).to.deep.eq(obj.get());

    obj = new WaUrlParameterButton();
    obj.setUrlParameter("url_parameter");
    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaUrlParameterButton();
    obj.setUrlParameter("url_parameter");
    expect(obj.get().type).to.eq("url");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaUrlParameterButton().get();
    }).to.throw();
  });
});

const chai = require("chai");

const { expect } = chai;
const { WaContact } = require("../../../../src/modules/command/contact/index");

describe("whatsapp contact object Test", () => {
  it("should return wa_contact object", () => {
    const params = {
      first_name: "fname",
      last_name: "lname",
      full_name: "fname",
      phone_num: "pnum",
    };
    let obj = new WaContact(params);

    expect(params).to.deep.eq(obj.get());

    obj = new WaContact();
    obj.setFirstName("fname");
    obj.setLastName("lname");
    obj.setFullName("fname");
    obj.setPhoneNum("pnum");
    expect(params).to.deep.eq(obj.get());
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaContact().get();
    }).to.throw();
  });
});

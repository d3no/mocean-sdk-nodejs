const chai = require("chai");

const {expect} = chai;
const {
  WaContactContentBuilder
} = require("../../../../src/modules/command/content_builder/index");
const {WaContact} = require("../../../../src/modules/command/contact/index");

describe("whatsapp contact content builder object Test", () => {

  beforeEach(() => {
    this.contact = new WaContact()
      .setFirstName("fname")
      .setLastName("lname")
      .setFullName("fname")
      .setPhoneNum("phone_num");
  });

  it("should return button object", () => {
    const params = {
      type: "contact_detail",
      contact_detail: this.contact.get(),
    };
    let obj = new WaContactContentBuilder(params);
    expect(params).to.deep.eq(obj.get());

    obj = new WaContactContentBuilder();
    obj.setContactDetail(this.contact);
    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaContactContentBuilder();
    obj.setContactDetail(this.contact);
    expect(obj.get().type).to.eq("contact_detail");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaContactContentBuilder().get();
    }).to.throw();
  });
});

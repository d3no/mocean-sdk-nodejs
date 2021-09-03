const chai = require("chai");

const { expect } = chai;
const {
  WaContactTemplate
} = require("../../../../src/modules/command/template/index");
const {
  WaContactContentBuilder
} = require("../../../../src/modules/command/content_builder/index");
const { WaContact } = require("../../../../src/modules/command/contact");

describe("whatsapp document template object Test", () => {
  beforeEach(() => {
    const contactDetails = new WaContact();
    contactDetails.setFirstName("fname");
    contactDetails.setLastName("lname");
    contactDetails.setFullName("fname");
    contactDetails.setPhoneNum("phone_num");
    this.content = new WaContactContentBuilder().setContactDetail(
      contactDetails
    );
  });

  it("should return template object", () => {


    const params = {
      type: "contact_detail",
      name: "tname",
      language: "tlang",
      body_params: ["val1"],
      media_content: this.content.get()
    };
    let obj = new WaContactTemplate(params);

    expect(params).to.deep.eq(obj.get());

    obj = new WaContactTemplate();
    obj.setName("tname");
    obj.setLanguage("tlang");
    obj.setBodyParams(["val1"]);
    obj.setMediaContent(this.content);

    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaContactTemplate();
    obj.setName("tname");
    obj.setLanguage("tlang");
    obj.setBodyParams(["val1"]);
    obj.setMediaContent(this.content);

    expect(obj.get().type).to.eq("contact_detail");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaContactTemplate().get();
    }).to.throw();
  });
});

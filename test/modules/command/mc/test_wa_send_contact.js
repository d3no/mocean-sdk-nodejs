const chai = require("chai");

const { expect } = chai;
const { WaSendContact } = require("../../../../src/modules/command/mc/index");
const {
  WaContactContentBuilder
} = require("../../../../src/modules/command/content_builder/index");
const {
  WaContact
} = require("../../../../src/modules/command/contact/index");

describe("wa_send_contact Test", () => {
  beforeEach(() => {
    const contact = new WaContact()
      .setFirstName("fname")
      .setLastName("lname")
      .setFullName("fname")
      .setPhoneNum("pnum");
    this.content = new WaContactContentBuilder().setContactDetail(contact);
  });

  it("should return mc object", () => {
    const params = {
      action: "send-whatsapp",
      from: {
        type: "bot_username",
        id: "from"
      },
      to: {
        type: "phone_num",
        id: "to"
      },
      content: this.content.get()
    };
    let obj = new WaSendContact(params);

    expect(params).to.deep.eq(obj.get());

    obj = new WaSendContact();
    obj.from("from");
    obj.to("to");
    obj.content(this.content);

    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaSendContact();
    obj.from("from");
    obj.to("to");
    obj.content(this.content);

    expect(obj.get().action).to.eq("send-whatsapp");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaSendContact().get();
    }).to.throw();
  });
});

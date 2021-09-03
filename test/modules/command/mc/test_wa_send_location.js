const chai = require("chai");

const { expect } = chai;
const { WaSendLocation } = require("../../../../src/modules/command/mc/index");
const {
  WaLocationContentBuilder
} = require("../../../../src/modules/command/content_builder/index");
const {
  WaLocation
} = require("../../../../src/modules/command/location/index");

describe("wa_send_location Test", () => {
  beforeEach(() => {
    const location = new WaLocation()
      .setLatitude("latitude")
      .setLongitude("longitude");
    this.content = new WaLocationContentBuilder().setLocation(location);
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
    let obj = new WaSendLocation(params);

    expect(params).to.deep.eq(obj.get());

    obj = new WaSendLocation();
    obj.from("from");
    obj.to("to");
    obj.content(this.content);

    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaSendLocation();
    obj.from("from");
    obj.to("to");
    obj.content(this.content);

    expect(obj.get().action).to.eq("send-whatsapp");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaSendLocation().get();
    }).to.throw();
  });
});

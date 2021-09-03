const chai = require("chai");

const {expect} = chai;
const {
  WaLocationContentBuilder
} = require("../../../../src/modules/command/content_builder/index");
const {
  WaLocation
} = require("../../../../src/modules/command/location/index");

describe("whatsapp location content builder object Test", () => {

  beforeEach(() => {
    this.location = new WaLocation()
      .setLongitude("longitude")
      .setLatitude("latitude");
  });

  it("should return button object", () => {
    const params = {
      type: "location",
      location: this.location.get()
    };
    let obj = new WaLocationContentBuilder(params);
    expect(params).to.deep.eq(obj.get());

    obj = new WaLocationContentBuilder();
    obj.setLocation(this.location);
    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaLocationContentBuilder();
    obj.setLocation(this.location);
    expect(obj.get().type).to.eq("location");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaLocationContentBuilder().get();
    }).to.throw();
  });
});

const chai = require("chai");

const { expect } = chai;
const {
  WaLocationTemplate
} = require("../../../../src/modules/command/template/index");
const {
  WaLocationContentBuilder
} = require("../../../../src/modules/command/content_builder/index");
const {
  WaLocation
} = require("../../../../src/modules/command/location/index");

describe("whatsapp location template object Test", () => {
  beforeEach(() => {
    const location = new WaLocation();
    location.setLatitude("latitude");
    location.setLongitude("longitude");
    this.location = new WaLocationContentBuilder().setLocation(location);
  });

  it("should return template object", () => {
    const params = {
      type: "location",
      name: "tname",
      language: "tlang",
      body_params: ["val1"],
      media_content: this.location.get()
    };
    let obj = new WaLocationTemplate(params);
    expect(params).to.deep.eq(obj.get());

    obj = new WaLocationTemplate();
    obj.setName("tname");
    obj.setLanguage("tlang");
    obj.setBodyParams(["val1"]);
    obj.setMediaContent(this.location);

    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaLocationTemplate();
    obj.setName("tname");
    obj.setLanguage("tlang");
    obj.setBodyParams(["val1"]);
    obj.setMediaContent(this.location);

    expect(obj.get().type).to.eq("location");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaLocationTemplate().get();
    }).to.throw();
  });
});
module.exports = WaLocation;

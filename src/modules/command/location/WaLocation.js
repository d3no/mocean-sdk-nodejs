const AbstractLocation = require("./AbstractLocation");

class WaLocation extends AbstractLocation {
  requiredKey() {
    return ["longitude", "latitude"];
  }

  setLongitude(val) {
    this.requestData.longitude = val;
    return this;
  }

  setLatitude(val) {
    this.requestData.latitude = val;
    return this;
  }

  setName(val) {
    this.requestData.name = val;
    return this;
  }

  setAccuracy(val) {
    this.requestData.accuracy = val;
    return this;
  }

  setAddress(val) {
    this.requestData.address = val;
    return this;
  }
}

module.exports = WaLocation;

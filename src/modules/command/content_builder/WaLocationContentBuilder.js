const AbstractContentBuilder = require("./AbstractContentBuilder");
const WaLocation = require("../location/WaLocation");

class WaLocationContentBuilder extends AbstractContentBuilder {
  requiredKey() {
    return ["location"];
  }

  type() {
    return "location";
  }

  /**
   * @param {WaLocation} location - WaLocation
   */
  setLocation(location) {
    if (location instanceof WaLocation === false) {
      throw new Error("location must be instance of WaLocation");
    }
    this.requestData.location = location.get();
    return this;
  }
}

module.exports = WaLocationContentBuilder;

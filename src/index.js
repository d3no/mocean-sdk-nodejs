const Client = require("./Client");
const Mocean = require("./Mocean");
const Mc = require("./modules/voice/Mc");
const McBuilder = require("./modules/voice/McBuilder");
const MessageChannel = require("./modules/message/Channel");
const CommandContactType = require("./modules/command/mc/ContactType");
const CommandMcBuilder = require("./modules/command/McBuilder");
// eslint-disable-next-line import/extensions
const CommandMc = require("./modules/command/Mc.js");
const CommandContact = require("./modules/command/contact");
const CommandContentBuilder = require("./modules/command/content_builder");
const CommandLocation = require("./modules/command/location");
const CommandTemplate = require("./modules/command/template");

module.exports = {
  Client,
  Mocean,
  Mc,
  McBuilder,
  MessageChannel,
  CommandContactType,
  CommandMcBuilder,
  CommandMc,
  CommandContact,
  CommandLocation,
  CommandTemplate,
  CommandContentBuilder
};

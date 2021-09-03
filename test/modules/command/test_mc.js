const chai = require("chai");

const { expect } = chai;
const { CommandMc } = require("../../../src/index");
const {
  TgSendAudio,
  TgSendAnimation,
  TgSendDocument,
  TgSendPhoto,
  TgSendVideo,
  TgSendText,
  TgRequestContact,
  SendSMS
} = require("../../../src/modules/command/mc/index");

describe("mc Test", () => {
  it("should create a TgSendAudio mc", () => {
    const tgSendAudio = CommandMc.TgSendAudio();
    expect(tgSendAudio).to.be.instanceOf(TgSendAudio);
  });

  it("should create a TgSendAnimation mc", () => {
    const tgSendAnimation = CommandMc.TgSendAnimation();
    expect(tgSendAnimation).to.be.instanceOf(TgSendAnimation);
  });

  it("should create a TgSendDocument mc", () => {
    const tgSendDocument = CommandMc.TgSendDocument();
    expect(tgSendDocument).to.be.instanceOf(TgSendDocument);
  });

  it("should create a TgSendPhoto mc", () => {
    const tgSendPhoto = CommandMc.TgSendPhoto();
    expect(tgSendPhoto).to.be.instanceOf(TgSendPhoto);
  });

  it("should create a TgSendVideo mc", () => {
    const tgSendVideo = CommandMc.TgSendVideo();
    expect(tgSendVideo).to.be.instanceOf(TgSendVideo);
  });

  it("should create a TgSendText mc", () => {
    const tgSendText = CommandMc.TgSendText();
    expect(tgSendText).to.be.instanceOf(TgSendText);
  });

  it("should create a TgRequestContact mc", () => {
    const tgRequestContact = CommandMc.TgRequestContact();
    expect(tgRequestContact).to.be.instanceOf(TgRequestContact);
  });

  it("should create a SendSMS mc", () => {
    const sendSMS = CommandMc.SendSMS();
    expect(sendSMS).to.be.instanceOf(SendSMS);
  });
});

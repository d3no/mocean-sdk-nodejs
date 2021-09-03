const {
  TgRequestContact,
  TgSendAnimation,
  TgSendAudio,
  TgSendDocument,
  TgSendPhoto,
  TgSendText,
  TgSendVideo,
  SendSMS,
  WaSendText,
  WaSendAudio,
  WaSendDocument,
  WaSendPhoto,
  WaSendVideo,
  WaSendSticker,
  WaSendContact,
  WaSendLocation,
  WaSendTemplate
} = require("./mc/index");

class Mc {
  static TgRequestContact() {
    return new TgRequestContact();
  }

  static TgSendAnimation() {
    return new TgSendAnimation();
  }

  static TgSendAudio() {
    return new TgSendAudio();
  }

  static TgSendDocument() {
    return new TgSendDocument();
  }

  static TgSendPhoto() {
    return new TgSendPhoto();
  }

  static TgSendText() {
    return new TgSendText();
  }

  static TgSendVideo() {
    return new TgSendVideo();
  }

  static SendSMS() {
    return new SendSMS();
  }

  static WaSendText() {
    return new WaSendText();
  }

  static WaSendAudio() {
    return new WaSendAudio();
  }

  static WaSendDocument() {
    return new WaSendDocument();
  }

  static WaSendPhoto() {
    return new WaSendPhoto();
  }

  static WaSendSticker() {
    return new WaSendSticker();
  }

  static WaSendVideo() {
    return new WaSendVideo();
  }

  static WaSendContact() {
    return new WaSendContact();
  }

  static WaSendLocation() {
    return new WaSendLocation();
  }

  static WaSendTemplate() {
    return new WaSendTemplate();
  }
}

module.exports = Mc;

const chai = require("chai");

const { expect } = chai;
const { WaSendAudio } = require("../../../../src/modules/command/mc/index");
const { WaAudioContentBuilder } = require("../../../../src/modules/command/content_builder/index");

describe("wa_send_audio Test", () => {
  beforeEach(() => {
    this.content = new WaAudioContentBuilder().setText("text").setRichMediaUrl("url");
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
    let obj = new WaSendAudio(params);

    expect(params).to.deep.eq(obj.get());

    obj = new WaSendAudio();
    obj.from("from");
    obj.to("to");
    obj.content(this.content);

    expect(params).to.deep.eq(obj.get());
  });

  it("should auto define action", () => {
    const obj = new WaSendAudio();
    obj.from("from");
    obj.to("to");
    obj.content(this.content);

    expect(obj.get().action).to.eq("send-whatsapp");
  });

  it("should throw if required field not set", () => {
    expect(() => {
      new WaSendAudio().get();
    }).to.throw();
  });
});

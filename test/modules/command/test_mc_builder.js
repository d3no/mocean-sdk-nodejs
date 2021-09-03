const chai = require("chai");

const { expect } = chai;
const { CommandMcBuilder, CommandMc } = require("../../../src/index");

describe("McBuilder Test", () => {
  it("should able to add multiple mc object", () => {
    const tgSendText = CommandMc.TgSendText();
    tgSendText.from("test from");
    tgSendText.to("test to");
    tgSendText.content("test content");

    const builder = new CommandMcBuilder();
    builder.add(tgSendText);

    expect(builder.build()).to.have.lengthOf(1);
    expect(builder.build()[0]).to.eq(tgSendText.get());

    tgSendText.from("test from");
    tgSendText.to("test to");
    tgSendText.content("test content");

    builder.add(tgSendText);

    expect(builder.build()).to.have.lengthOf(2);
    expect(builder.build()[1]).to.eq(tgSendText.get());
  });

  it("should throw if add non mc object", () => {
    expect(() => {
      new CommandMcBuilder().add("test");
    }).to.throw();
  });
});

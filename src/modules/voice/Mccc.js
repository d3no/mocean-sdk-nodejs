const { Say, Bridge, Collect, Play, Sleep } = require("./Mccc/index");

class Mccc {
  static say(text = null) {
    const ins = new Say();

    if (text) {
      ins.setText(text);
    }

    return ins;
  }

  static play(file = null) {
    const ins = new Play();

    if (file) {
      ins.setFiles(file);
    }

    return ins;
  }

  static bridge(to = null) {
    const ins = new Bridge();

    if (to) {
      ins.setTo(to);
    }

    return ins;
  }

  static collect(eventUrl = null) {
    const ins = new Collect();

    if (eventUrl) {
      ins.setEventUrl(eventUrl);
    }

    return ins;
  }

  static sleep(duration = null) {
    const ins = new Sleep();

    if (duration) {
      ins.setDuration(duration);
    }

    return ins;
  }
}

module.exports = Mccc;

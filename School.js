const EventEmitter = require("events");

class School extends EventEmitter {
  startPereod() {
    console.log("class Started");

    setTimeout(() => {
      this.emit("bellring", {
        period: "first",
        text: "period ended",
      });
    }, 2000);
  }
}
module.exports = School;

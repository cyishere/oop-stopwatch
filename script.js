function Stopwatch() {
  let startTime, stopTime;
  let running = false;

  this.duration = 0;

  this.start = function () {
    if (!running) {
      // start timer
      running = true;
      startTime = new Date().getTime();
    } else {
      throw new Error("Stopwatch is started.");
    }
  };

  this.stop = function () {
    if (running) {
      // stop timer
      running = false;
      stopTime = new Date().getTime();
      this.duration = (stopTime - startTime) / 1000;
    } else {
      throw new Error("Stopwatch is stoped.");
    }
  };

  this.reset = function () {
    running = false;
    this.duration = 0;
  };
}

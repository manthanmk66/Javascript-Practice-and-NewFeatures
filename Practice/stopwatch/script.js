var hours = document.getElementById("hr");
var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");

var sec = 0;
var min = 0;
var hrs = 0;

var interval;

function start() {
  if (!interval) {
    interval = setInterval(incrementTime, 1000);
  }
}

function stop() {
  clearInterval(interval);
  interval = false;
}

function resume() {}

function restart() {
  sec = 0;
  min = 0;
  hrs = 0;
  start();
}

function reset() {
  stop();
  sec = 0;
  min = 0;
  hrs = 0;
  updateDisplay();
}

function resume() {
  start();
}

function incrementTime() {
  sec = sec + 1;

  if (sec === 60) {
    sec = 0;
    min += 1;
  }

  if (min === 60) {
    min = 0;
    hrs += 1;
  }

  updateDisplay();
}

function updateDisplay() {
  seconds.innerHTML = sec;
  minutes.innerHTML = min;
  hours.innerHTML = hrs;
}

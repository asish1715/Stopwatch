let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;
let isRunning = false;

function updateDisplay() {
  let sec = seconds < 10 ? "0" + seconds : seconds;
  let min = minutes < 10 ? "0" + minutes : minutes;
  let hr = hours < 10 ? "0" + hours : hours;
  document.getElementById("display").textContent = `${hr}:${min}:${sec}`;
}

function startStop() {
  if (!isRunning) {
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
}

function stopWatch() {
  clearInterval(timer);
  isRunning = false;
}

function resetWatch() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  isRunning = false;
}

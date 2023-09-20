const daysText = document.querySelector("#days");
const hoursText = document.querySelector("#hours");
const minsText = document.querySelector("#mins");
const secsText = document.querySelector("#secs");

const newYearsDate = new Date("1 Jan 2024");

setInterval(countdown, 1000);

function countdown() {
    const { days, hours, mins, secs } = processCountdownValues()
    renderCountdown({ days, hours, mins, secs })
}

function addPadStart(value) {
  return value < 10 ? `0${value}` : value;
}

function processCountdownValues() {
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const mins = Math.floor((totalSeconds / 60) % 60);
  const secs = Math.floor(totalSeconds % 60);

  return { days, hours, mins, secs };
}

function renderCountdown({ days, hours, mins, secs }) {
  daysText.innerText = addPadStart(days);
  hoursText.innerText = addPadStart(hours);
  minsText.innerText = addPadStart(mins);
  secsText.innerText = addPadStart(secs);
}

const actualDate = new Date();
const actualYear = actualDate.getFullYear();
let nextYear = actualYear + 1;

function writeTitle(nextYear) {
  const yearTitle = document.querySelector("#next-Year");
  yearTitle.innerHTML = nextYear;
}

function updateCount() {
  const now = new Date();
  const nextY = new Date(now.getFullYear() + 1, 0, 1);
  const remaining = nextY - now;

  let seconds = Math.floor(remaining / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;

  if (seconds >= 60) {
    seconds -= 60;
    minutes += 1;
  }

  if (minutes >= 60) {
    minutes -= 60;
    hours += 1;
  }

  if (hours >= 24) {
    hours -= 24;
    days += 1;
  }

  document.querySelector(".days").innerHTML = formatWithZero(days);
  document.querySelector(".hours").innerHTML = formatWithZero(hours);
  document.querySelector(".minutes").innerHTML = formatWithZero(minutes);
  document.querySelector(".seconds").innerHTML = formatWithZero(seconds);

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 40) {
    happyNewYear();
  }
}

function formatWithZero(value) {
  return value < 10 ? "0" + value : value;
}

writeTitle(nextYear);
setInterval(updateCount, 1000);

function happyNewYear() {
    window.open('https://youtu.be/Ee49cPAhstI', "Happy New Year!");
}
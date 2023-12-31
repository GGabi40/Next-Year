const actualDate = new Date();

const actualYear = actualDate.getFullYear();
const actualDay = actualDate.getDate();
const actualHour = actualDate.getHours();
const actualMin = actualDate.getMinutes();
const actualSec = actualDate.getSeconds();

function writeTitle(actualYear) {
    const yearTitle = document.querySelector('#next-Year');
    yearTitle.innerHTML = actualYear+1;
}

function writeDay(actualDate) {
}

console.log(actualHour, actualMin, actualSec);

writeTitle(actualYear);
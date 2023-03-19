import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const timerEl = document.querySelector(`.timer`);
timerEl.style.display = `flex`;
timerEl.style.gap = `20px`;
timerEl.style.paddingTop = `20px`;

const fieldEl = document.querySelectorAll(`.field`)
fieldEl.forEach((div) => {
    div.style.display = `flex`;
    div.style.flexDirection = `column`;
    div.style.textAlign = `center`;
    div.firstElementChild.style.fontWeight = `700`;
    div.firstElementChild.style.fontSize = `24px`;
})

const startBtnEl = document.querySelector(`button[data-start]`);
const daysEl = document.querySelector(`span[data-days]`);
const hoursEl = document.querySelector(`span[data-hours]`);
const minutesEl = document.querySelector(`span[data-minutes]`);
const secondsEl = document.querySelector(`span[data-seconds]`);
startBtnEl.setAttribute(`disabled`, ``);
console.log(startBtnEl);
console.log(daysEl);
console.log(hoursEl);
console.log(minutesEl);
console.log(secondsEl);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    console.log(selectedDates[0]);
    },
};

console.log(options.defaultDate);

function convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
    const days = Math.floor(ms / day);
  // Remaining hours
    const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

flatpickr("#datetime-picker", options);
console.dir(flatpickr)


Notiflix.Notify.success('Sol lucet omnibus');

Notiflix.Notify.warning('Memento te hominem esse');
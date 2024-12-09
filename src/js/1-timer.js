import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
btnStart.disabled = true;

const elements = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const timer = {
  userSelectedDate: 0,
  idInterval: 0,
  start() {
    const time = this.userSelectedDate - Date.now();
    if (time <= 0) {
      clearInterval(this.idInterval);
      input.disabled = false;
      iziToast.info({
        title: 'Stop',
        message: 'Time is over!',
        position: 'topCenter',
      });
      return;
    }
    const formatDate = convertMs(time);
    drawElements(formatDate);
  },
};

function drawElements({ days, hours, minutes, seconds }) {
  elements.days.textContent = formatElementsTimer(days);
  elements.hours.textContent = formatElementsTimer(hours);
  elements.minutes.textContent = formatElementsTimer(minutes);
  elements.seconds.textContent = formatElementsTimer(seconds);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const time = selectedDates[0].getTime() - Date.now();
    if (time <= 0) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topCenter',
      });
      return;
    }
    btnStart.disabled = false;
    timer.userSelectedDate = selectedDates[0].getTime();
    const formatDate = convertMs(time);
    drawElements(formatDate);
  },
};

function formatElementsTimer(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
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

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  input.disabled = true;
  timer.idInterval = setInterval(() => {
    timer.start();
  }, 1000);
});

flatpickr(input, options);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtnEl = document.querySelector(`button[data-start]`);
const stopBtnEl = document.querySelector(`button[data-stop]`);
stopBtnEl.setAttribute(`disabled`, `true`);

startBtnEl.addEventListener(`click`, handleStartBtnEl);
stopBtnEl.addEventListener(`click`, handleStoptBtnEl);

function handleStartBtnEl(event) {
    startBtnEl.setAttribute(`disabled`, `true`);
    stopBtnEl.removeAttribute(`disabled`);
    console.log(startBtnEl);
    timerId = setInterval(() => {
        const color = getRandomHexColor();
        document.body.style.backgroundColor = color;
    }, 1000);
}

function handleStoptBtnEl(event) {
    startBtnEl.removeAttribute(`disabled`);
    stopBtnEl.setAttribute(`disabled`, `true`);
    console.log(stopBtnEl);
    clearInterval(timerId);
}
import Notiflix from 'notiflix';
import throttle from 'lodash.throttle'

const createPromiseBntEl = document.querySelector(`button[type="submit"]`);
const inputDelayEl = document.querySelector(`input[name="delay"]`);
const inputStapEl = document.querySelector(`input[name="step"]`);
const inputAmountEl = document.querySelector(`input[name="amount"]`)
const formEl = document.querySelector(`.form`);

createPromiseBntEl.setAttribute(`disabled`, ``);

inputDelayEl.addEventListener(`input`, throttle(checkInputValue, 1000));
inputStapEl.addEventListener(`input`, throttle(checkInputValue, 1000));
inputAmountEl.addEventListener(`input`, throttle(checkInputValue, 1000));
createPromiseBntEl.addEventListener(`click`, handleCreatePromiseBnt);

let inputStepValue;
let inputDelayValue;
let inputAmountValue;

function checkInputValue() {
  inputStepValue = Number(inputStapEl.value);
  inputDelayValue = Number(inputDelayEl.value);
  inputAmountValue = Number(inputAmountEl.value);
  if (inputDelayValue && inputStepValue && inputAmountValue) {
    createPromiseBntEl.removeAttribute("disabled");
  }
}

function handleCreatePromiseBnt(e) {
  e.preventDefault();  
  inputStepValue = Number(inputStapEl.value);
  inputDelayValue = Number(inputDelayEl.value);
  inputAmountValue = Number(inputAmountEl.value);
  console.log(inputDelayValue);
  console.log(inputStepValue);
  let delayPlus = inputDelayValue;

  for (let i = 1; i <= inputAmountValue; i += 1) {
    console.log(delayPlus);
    createPromise(i, delayPlus).
      then(resolve => Notiflix.Notify.success(resolve)).
      catch(reject => Notiflix.Notify.failure(reject));
      delayPlus += inputStepValue;
  }
  formEl.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {          
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        } else {
          reject(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      }, delay)    
  })
}
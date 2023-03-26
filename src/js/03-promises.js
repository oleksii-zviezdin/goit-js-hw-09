import Notiflix from 'notiflix';
import throttle from 'lodash.throttle'

const createPromiseBntEl = document.querySelector(`button[type="submit"]`);
const formEl = document.querySelector(`.form`);

createPromiseBntEl.setAttribute(`disabled`, ``);

formEl.addEventListener(`input`, throttle(checkInputValue, 1000));
formEl.addEventListener(`submit`, handleCreatePromiseBnt);

function checkInputValue() {
  if (Number(formEl.elements.delay.value) && Number(formEl.elements.step.value) &&  Number(formEl.elements.amount.value)){
    createPromiseBntEl.removeAttribute("disabled");
  } 
}

function handleCreatePromiseBnt(e) {
  if (Number(formEl.elements.delay.value) <= 0 || Number(formEl.elements.step.value) <= 0 && Number(formEl.elements.amount.value) <= 0) {
    Notiflix.Notify.info(`Value can't be negative or zero`);
  }

  e.preventDefault();
  let delayPlus = Number(formEl.elements.delay.value);

  for (let i = 1; i <= Number(formEl.elements.amount.value); i += 1) {
    console.log(delayPlus);
    createPromise(i, delayPlus).
      then(resolve => Notiflix.Notify.success(resolve)).
      catch(reject => Notiflix.Notify.failure(reject));
      delayPlus += Number(formEl.elements.step.value);
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
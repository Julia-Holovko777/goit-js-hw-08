import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onFormInput(event) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });
  if (email.value === '' || message.value === '') {
    return alert(`Обов'язкові поля повинні бути заповнені`);
  }

  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
  dataForm = {};
}
function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

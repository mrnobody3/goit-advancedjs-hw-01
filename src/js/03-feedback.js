import throttle from 'lodash.throttle';
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onInputForm, 500));

function onSubmitForm(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
}

function onInputForm(e) {
  const { name, value } = e.target;
  const storObj = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? {};
  storObj[name] = value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storObj));
}

(function onFillInput() {
  const storObj = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (!storObj) return;
  Object.keys(storObj).forEach(el => {
    form.elements[el].value = storObj[el];
  });
})();

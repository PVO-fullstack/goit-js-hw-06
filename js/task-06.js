const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  const valueLength = Number(input.value.length);
  const dataLength = Number(input.dataset.length);

  if (valueLength === dataLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
    return;
  } else
    input.classList.add('invalid');
  input.classList.remove('valid');
}
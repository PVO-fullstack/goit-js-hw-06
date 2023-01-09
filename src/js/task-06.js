const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  const valueLength = input.value.length;
  const dataLength = input.dataset.length;

  if (valueLength < dataLength) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    return;
  } else
    input.classList.add('valid');
  input.classList.remove('invalid');
}
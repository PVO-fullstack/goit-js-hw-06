const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    alert('Bсі поля повинні бути заповнені');
  } else {
  const data = {
    email: email.value,
    password: password.value,
  }
  console.log(data);
  event.currentTarget.reset();    
  }

}

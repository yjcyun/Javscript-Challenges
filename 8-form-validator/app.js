const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const errors = {
  username: false,
  eamil: false,
  password: false,
  password2: false
}

// Show input error message
function showError(input, msg) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';

  const small = formControl.querySelector('small');
  small.textContent = msg;
}

// Show input success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check for valid email
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  }
  else {
    showError(input, 'Email is invalid');
  }
}

// Check for required inputs
function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      errors[input.id] = true;
    } else {
      showSuccess(input);
      errors[input.id] = false;
    }
  });
}

// Check for input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  }
  else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  }
  else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords much match')
  }
}

// Get field name capitalized
function getFieldName(input) {
  return input.id.substring(0, 1).toUpperCase() + input.id.substring(1);
}

form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  if (!errors.username) {
    checkLength(username, 3, 15);
  }
  if (!errors.password) {
    checkLength(password, 6, 25);
  }
  if (!errors.email) {
    checkEmail(email);
  }
  if (!errors.password && !errors.password2) {
    checkPasswordMatch(password, password2);
  }
});
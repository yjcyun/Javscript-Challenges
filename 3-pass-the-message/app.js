const form = document.getElementById('form');
const message = document.getElementById('message');
const inputMessage = document.getElementById('message-input');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // If user does not enter anything...
  if (inputMessage.value === '') {
    feedback.classList.add('show');
    setTimeout(() => {
      feedback.classList.remove('show');
    }, 2000);
  } else {
    message.textContent = inputMessage.value;
    inputMessage.value = '';
  }
})
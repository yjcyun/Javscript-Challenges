const number = document.getElementById('number');
const buttons = document.querySelectorAll('.btn');

let count = 0;

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('minus')) {
      count--;
    } else if (btn.classList.contains('plus')) {
      count++;
    } else {
      count = 0;
    }
    number.textContent = count;
  });
});
const background = document.getElementById('background');
const button = document.getElementById('button');

button.addEventListener('click', changeBackground)

function changeBackground() {
  const hex = '0123456789abcdef';
  let randomHex = '';
  for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * (hex.length));
    randomHex += hex[randomNum];
  }

  background.style.background = `#${randomHex}`
}
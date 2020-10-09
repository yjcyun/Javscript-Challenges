const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.getElementById('time-left');
const startBtn = document.getElementById('button');

let score = document.getElementById('score');

let result = 0;
let currentTime = timeLeft.textContent;
let hitPosition;

startBtn.addEventListener('click', () => {
  let timerId = setInterval(countDown, 1000);
  moveMole();

  function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
  
    if (currentTime === 0) {
      clearInterval(timerId);
    }
  }
})

function randomSquare() {
  square.forEach(sq => {
    sq.classList.remove('mole');
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('mole');

  hitPosition = randomPosition.id
}

square.forEach(sq => {
  sq.addEventListener('mouseup', () => {
    if (sq.id === hitPosition) {
      result++;
      score.textContent = result;
    }
  })
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 500);
}

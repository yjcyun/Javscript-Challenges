const cardArr = [
  {
    name: 'deer',
    img: './assets/deer.png'
  },
  {
    name: 'deer',
    img: './assets/deer.png'
  },
  {
    name: 'dog',
    img: './assets/dog.png'
  },
  {
    name: 'dog',
    img: './assets/dog.png'
  },
  {
    name: 'fries',
    img: './assets/fries.png'
  },
  {
    name: 'fries',
    img: './assets/fries.png'
  },
  {
    name: 'penguin',
    img: './assets/penguin.png'
  },
  {
    name: 'penguin',
    img: './assets/penguin.png'
  },
  {
    name: 'pineapple',
    img: './assets/pineapple.png'
  },
  {
    name: 'pineapple',
    img: './assets/pineapple.png'
  },
  {
    name: 'pumpkin',
    img: './assets/pumpkin.png'
  },
  {
    name: 'pumpkin',
    img: './assets/pumpkin.png'
  },
];

const grid = document.getElementById('grid');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];
const modal = document.getElementById('modal');
const playAgain = document.getElementById('play-again');
const closeModal = document.getElementById('close-modal');

// Load cards
document.addEventListener('DOMContentLoaded', () => {
  createBoard();
});

// Modal- play again
playAgain.addEventListener('click', () => location.reload());

// Modal- close modal
closeModal.addEventListener('click', () => modal.classList.remove('show'));
window.addEventListener('click', () => modal.classList.remove('show'));

// Create board
function createBoard() {
  // 1. Randomly sort cardArr
  cardArr.sort(() => 0.5 - Math.random());
  // 2. create img tag and assign data-id
  cardArr.forEach((_, index) => {
    const card = document.createElement('img');
    card.setAttribute('src', 'assets/default.png');
    card.setAttribute('data-id', index);
    // 3. When clicked on card, flip it to see the image
    card.addEventListener('click', flipCard);
    // 4. Append all cards to grid
    grid.appendChild(card);
  });
}

// Check for match
function checkForMatch() {
  const cards = document.querySelectorAll('img');

  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  // If match
  if (cardsChosen[0] === cardsChosen[1]) {
    cardsWon.push(cardsChosen);
    cards[cardsChosenId[0]].removeEventListener('click', flipCard)
    cards[cardsChosenId[1]].removeEventListener('click', flipCard)
  }
  // If not match
  else {
    cards[optionOneId].setAttribute('src', 'assets/default.png');
    cards[optionTwoId].setAttribute('src', 'assets/default.png');
    cards[optionOneId].classList.remove('flip');
    cards[optionTwoId].classList.remove('flip');
  }
  cardsChosen = [];
  cardsChosenId = [];

  if (cardsWon.length === cardArr.length / 2) {
    modal.classList.add('show');
  }
}

// Flip card
function flipCard() {
  // Get the selected cardId 
  const cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArr[cardId].name);
  cardsChosenId.push(cardId);
  // Set the img from the cardArr
  this.setAttribute('src', cardArr[cardId].img);

  // For flip effect
  this.classList.toggle('flip');

  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 600);
  }
}
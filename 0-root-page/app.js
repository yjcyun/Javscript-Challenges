const solutions = [
  {
    id: 0,
    title: 'Change background color',
    img: './assets/change-background.png',
    live: 'https://1-change-background-color.vercel.app/'
  },
  {
    id:1,
    title: 'Random quote generator',
    img: './assets/random-quote.png',
    live: 'https://2-random-quote-generator.vercel.app/'
  },
  {
    id:2,
    title: 'Pass the message',
    img: './assets/pass-message.png',
    live: 'https://3-pass-the-message.yjcyun.vercel.app/'
  },
  {
    id: 3,
    title: 'Counter',
    img: './assets/counter.png',
    live: 'https://4-counter.vercel.app/'
  },
  {
    id: 4,
    title: 'Reviews slide',
    img: './assets/review.png',
    live: 'https://5-reviews-carousel.vercel.app/'
  },
  {
    id: 5,
    title: 'Memory game',
    img: './assets/memory-game.png',
    live: 'https://memory-game-mu.vercel.app/'
  },
  {
    id: 6,
    title: 'Whack-a-mole game',
    img: './assets/whake.png',
    live: 'https://whack-a-mole-lac.vercel.app/'
  },
  {
    id: 7,
    title: 'Form validator',
    img: './assets/form.png',
    live: 'https://8-form-validator.vercel.app/'
  }
]

window.addEventListener('DOMContentLoaded', () => {
  const solutionCards = document.getElementById('solution-cards');
  solutionCards.innerHTML = '';

  let solutionCard = '';

  solutions.forEach((solution) => {
    solutionCard += `
    <a href=${solution.live} target='_blank' class='live'>
      <div class='solution__card'>
        <div class='solution__card-img'>
          <img src=${solution.img} alt=${solution.title}>
        </div>
        <div class='solution__card-body'>
          <h3 class='title'>${solution.title}</h3>
          <div class='links'>
            <span>Live &#8594;</span>
          </div>
        </div>
      </div>
    </a>
    `
  });

  solutionCards.innerHTML = solutionCard;
})

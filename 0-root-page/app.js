const solutions = [
  {
    id: 0,
    title: 'Change background color',
    img: './assets/change-background.png',
    live: 'https://frontendmentor-social-proof.vercel.app/'
  },
  {
    id:1,
    title: 'Random quote generator',
    img: './assets/random-quote.png',
    live: 'https://frontendmentor-article-preview-nine.vercel.app/'
  },
  {
    id:2,
    title: 'Pass the message',
    img: './assets/pass-message.png',
    live: 'https://frontendmentor-fylo-data-storage-orpin.vercel.app/'
  },
  {
    id: 3,
    title: 'Counter',
    img: './assets/counter.png',
    live: 'https://base-apparel-coming-soon-master-murex.vercel.app/'
  },
  {
    id: 4,
    title: 'Reviews slide',
    img: './assets/review.png',
    live: 'https://four-card-feature-section-master-flax.vercel.app/'
  },
  {
    id: 5,
    title: 'Memory game',
    img: './assets/memory-game.png',
    live: 'https://intro-component-with-signup-form-master-delta.vercel.app/'
  },
  {
    id: 6,
    title: 'Whack-a-mole game',
    img: './assets/whake.png',
    live: 'https://single-price-grid-component-master-kappa-eight.vercel.app/'
  },
  {
    id: 7,
    title: 'Form validator',
    img: './assets/form.png',
    live: 'https://huddle-landing-page-with-single-introductory-section-master.yjcyun.vercel.app/'
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

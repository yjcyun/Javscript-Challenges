const reviews = [
  {
    id: 1,
    name: 'harry potter',
    job: 'wizard',
    img: 'https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consectetur fugiat quia suscipit aut facere qui illum quod itaque necessitatibus.'
  },
  {
    id: 2,
    name: 'hermione granger',
    job: 'witch',
    img: 'https://cdn.costumewall.com/wp-content/uploads/2015/09/hermione-granger.jpg',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consectetur fugiat quia suscipit aut facere qui illum quod itaque necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consectetur fugiat quia suscipit aut facere qui illum quod itaque necessitatibus.'
  },
  {
    id: 1,
    name: 'ron weasley',
    job: 'auror',
    img: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consectetur fugiat quia suscipit aut facere qui illum quod itaque necessitatibus. quia suscipit aut facere qui illum quod itaque necessitatibus.'
  },
];

const img = document.getElementById('avatar');
const author = document.getElementById('author');
const job = document.getElementById('job');
const testimonial = document.getElementById('testimonial');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const randomBtn = document.getElementById('random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
  showReview();
});

prevBtn.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showReview();
})

nextBtn.addEventListener('click', () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showReview();
})

randomBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showReview();
})

function showReview() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  testimonial.textContent = item.review;
}
const button = document.getElementById('button');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

window.addEventListener('DOMContentLoaded', generateQuote);
button.addEventListener('click', generateQuote);

const url = 'https://api.quotable.io/random';

async function generateQuote(){
  const response = await fetch(url);
  const data = await response.json();
  quote.textContent = data.content;
  author.textContent = data.author;
}
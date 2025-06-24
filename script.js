const container = document.getElementById('card-container');
const template = document.getElementById('card-template');

const cardTitles = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];

cardTitles.forEach(title => {
  const clone = template.content.cloneNode(true);
  clone.querySelector('h2').textContent = title;
  container.appendChild(clone);
});


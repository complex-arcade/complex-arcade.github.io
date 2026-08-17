const gameInput = document.querySelector('#search-input');
const cards = document.querySelectorAll('.library-card');

if (gameInput) {
  gameInput.addEventListener('input', () => {
    const searchTerm = gameInput.value.toLowerCase().trim();
    cards.forEach(card => {
      const titleEl = card.querySelector('.title');
      const img = card.querySelector('img');
      const titleText = (titleEl && titleEl.textContent) ? titleEl.textContent.toLowerCase() : '';
      const altText = (img && img.alt) ? img.alt.toLowerCase() : '';
      const combined = (titleText + ' ' + altText).trim();
      if (!searchTerm || combined.includes(searchTerm)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
}
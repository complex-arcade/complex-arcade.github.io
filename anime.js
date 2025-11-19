document.addEventListener('DOMContentLoaded', () => {
  const animeInput = document.querySelector('.search input');
  const animeShows = document.querySelectorAll('#anime-shows img');

  if (!animeInput || animeShows.length === 0) {
    console.error('Search elements not found');
    return;
  }

  animeInput.addEventListener('input', () => {
    const searchTerm = animeInput.value.toLowerCase();
    animeShows.forEach(show => {
      const showContainer = show.parentElement;
      if (show.alt.toLowerCase().includes(searchTerm)) {
        showContainer.style.display = 'inline-block';
      } else {
        showContainer.style.display = 'none';
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const appInput = document.querySelector('.search input');
  const apps = document.querySelectorAll('#apps img');

  if (!appInput || apps.length === 0) {
    console.error('Search elements not found');
    return;
  }

  appInput.addEventListener('input', () => {
    const searchTerm = appInput.value.toLowerCase();
    apps.forEach(app => {
      const appContainer = app.parentElement;
      if (app.alt.toLowerCase().includes(searchTerm)) {
        appContainer.style.display = 'inline-block';
      } else {
        appContainer.style.display = 'none';
      }
    });
  });
});
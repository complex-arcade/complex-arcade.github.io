function createLoader() {
  if (document.getElementById('loader')) return;

  const loader = document.createElement('div');
  loader.id = 'loader';
  loader.innerHTML = `
    <span id="loader-message"></span>
    <div style="margin-top:20px;">
      <i class="fas fa-circle-notch fa-spin" style="font-size:3vw; animation: spin 1.5s infinite linear;"></i>
    </div>
  `;
  
  const imagePath = new URL('/images/loadingRevamp.png', window.location.origin).href;
  
  loader.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #62a1ff;
    font-family: Lexend, sans-serif;
    font-size: 24px;
    z-index: 9999;
    transition: opacity 0.5s ease;
    `;
  document.body.prepend(loader);
}

const messages = [
  "Loading... please wait",
];

function showLoaderMessage() {
  const loaderMsg = document.getElementById('loader-message');
  if (loaderMsg) {
    loaderMsg.textContent = messages[Math.floor(Math.random() * messages.length)];
  }
}

window.addEventListener('DOMContentLoaded', () => {
  createLoader();
  showLoaderMessage();
});

window.addEventListener('load', function() {
  setTimeout(function() {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hide');
      loader.addEventListener('transitionend', () => {
        loader.remove();
      });
    }
  }, 700);
});
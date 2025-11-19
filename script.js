const gameInput = document.querySelector('input');
const games = document.querySelectorAll('#games img');


gameInput.addEventListener('input', () => {
  const searchTerm = gameInput.value.toLowerCase();
  games.forEach(game => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
});



function toggleFullscreen() {
    var elem = document.querySelector('.container');
    if (!elem) return;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}
// ...existing code...

function toggleFullscreen() {
    var elem = document.querySelector('.container');
    if (!elem) return;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }
}

// Hide/show bottom bar on fullscreen change
document.addEventListener('fullscreenchange', function() {
    var bottomBar = document.getElementById('gameInfo');
    if (document.fullscreenElement) {
        bottomBar.style.display = 'none';
    } else {
        bottomBar.style.display = '';
    }
});

// ...existing code...
  
document.addEventListener('fullscreenchange', function() {
    var bottomDiv = document.querySelector('.bottom-div');
    if (!bottomDiv) return;
    if (document.fullscreenElement) {
        bottomDiv.classList.add('hide-in-fullscreen');
    } else {
        bottomDiv.classList.remove('hide-in-fullscreen');
    }
});


function openCloaked(url, title = "New Tab") {
    const win = window.open('about:blank', '_blank');
    if (!win) return alert("Popup blocked!");

    win.document.title = title;
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    const iframe = win.document.createElement('iframe');
    iframe.src = "https://play.szvy.win";
    iframe.style.border = "none";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    win.document.body.appendChild(iframe);
}

fetch('/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

  function toggleFullscreenInfo() {
    const infoDiv = document.querySelector('.bottom-div');
    console.log('Fullscreen changed. InfoDiv:', infoDiv, 'Is fullscreen:', !!document.fullscreenElement);
    if (!infoDiv) return;

    if (document.fullscreenElement) {
        infoDiv.classList.add('hide-in-fullscreen');
    } else {
        infoDiv.classList.remove('hide-in-fullscreen');
    }
}

function setupParticles() {
    // Create particles container if it doesn't exist
    if (!document.getElementById('particles-js')) {
        const particlesContainer = document.createElement('div');
        particlesContainer.id = 'particles-js';
        particlesContainer.style.position = 'fixed';
        particlesContainer.style.top = '0';
        particlesContainer.style.left = '0';
        particlesContainer.style.width = '100%';
        particlesContainer.style.height = '100%';
        particlesContainer.style.zIndex = '-1';
        document.body.insertBefore(particlesContainer, document.body.firstChild);
    }

    // Initialize particles
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#008cff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3.7 },
            "line_linked": { "enable": true, "distance": 50, "color": "#82d5ff", "opacity": 1, "width": 1.6 },
            "move": { "enable": true, "speed": 4 }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "repulse" } }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Set up particles
    setupParticles();
    
    // Existing search functionality
    const searchInput = document.querySelector('.search input');
    const apps = document.querySelectorAll('#apps a');
    const anime = document.querySelectorAll('#anime a, #anime-shows a');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const value = this.value.toLowerCase();

            apps.forEach(app => {
                const img = app.querySelector('img');
                const alt = img ? img.alt.toLowerCase() : 'block';
                app.style.display = alt.includes(value) ? 'block' : 'none';
            });

            anime.forEach(show => {
                const img = show.querySelector('img');
                const alt = img ? img.alt.toLowerCase() : 'block';
                show.style.display = alt.includes(value) ? 'block' : 'none';
            });
        });
    }
});
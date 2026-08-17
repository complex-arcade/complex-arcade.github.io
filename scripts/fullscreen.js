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

function syncFullscreenState() {
    var elem = document.querySelector('.container');
    var bottomDiv = document.querySelector('.bottom-bar');
    var fullscreenActive = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);

    if (elem) {
        elem.classList.toggle('is-fullscreen', fullscreenActive);
    }

    if (bottomDiv) {
        bottomDiv.style.display = fullscreenActive ? 'none' : '';
    }
}

document.addEventListener('fullscreenchange', syncFullscreenState);
document.addEventListener('webkitfullscreenchange', syncFullscreenState);
document.addEventListener('mozfullscreenchange', syncFullscreenState);
document.addEventListener('MSFullscreenChange', syncFullscreenState);
window.addEventListener('load', function() {
    if (localStorage.getItem('particlesEnabled') === 'false') return;

    setTimeout(function() {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#2fa7ed" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5 },
                "size": { "value": 1 },
                "line_linked": { "enable": false, "distance": 200, "color": "#0884cc", "opacity": 1, "width": 1.6 },
                "move": { "enable": true, "speed": 1, "direction": "bottom" }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "repulse" } }
            }
        });
    }, 1000);
});

function enableParticles() {
    localStorage.setItem("particlesEnabled", "true");
    location.reload();
}

function disableParticles() {
    localStorage.setItem("particlesEnabled", "false");
    location.reload();
}
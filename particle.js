window.addEventListener('load', function() {
    setTimeout(function() {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#2fa7ed" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5 },
                "size": { "value": 5 },
                "line_linked": { "enable": true, "distance": 200, "color": "#0884cc", "opacity": 1, "width": 1.6 },
                "move": { "enable": true, "speed": 2 }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "repulse" } }
            }
        });
    }, 1000);
});
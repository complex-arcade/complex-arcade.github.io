// CLOAK 2 IS ABOUT:BLANK CODE \\

function openAboutBlank() {
            var newWindow = window.open('about:blank', '_blank');
            var iframe = newWindow.document.createElement('iframe');
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.border = "none";
            newWindow.document.body.style.margin = '0';
            newWindow.document.body.style.height = '100vh';
            iframe.src = window.location.origin;
            newWindow.document.body.appendChild(iframe);
        }
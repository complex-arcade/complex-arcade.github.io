       function showPopup() {
            const popup = document.getElementById('sitePopup');
            if (!popup) return;
            popup.classList.add('visible');
        }

        function closePopup() {
            const popup = document.getElementById('sitePopup');
            if (!popup) return;
            popup.classList.remove('visible');
        }

        window.addEventListener('load', () => {
            setTimeout(showPopup, 850);
        });
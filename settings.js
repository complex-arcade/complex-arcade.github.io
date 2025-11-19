const originalTitle = "Complex Arcade";
const originalFavicon = "/images/logo.png";

// Prefill inputs with current values
window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("websiteTitle").value = localStorage.getItem("customTitle") || originalTitle;
    document.getElementById("faviconUrl").value = localStorage.getItem("customFavicon") || originalFavicon;
});

// Reset function
function resetCustomSettings() {
    // Remove from localStorage
    localStorage.removeItem("customTitle");
    localStorage.removeItem("customFavicon");

    // Restore original title and favicon
    document.title = originalTitle;
    let link = document.querySelector("link[rel*='icon']") || document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = originalFavicon;
    document.getElementsByTagName("head")[0].appendChild(link);

    // Reset input fields
    document.getElementById("websiteTitle").value = originalTitle;
    document.getElementById("faviconUrl").value = originalFavicon;
}

// ...existing code...
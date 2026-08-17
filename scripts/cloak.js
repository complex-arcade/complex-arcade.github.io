const originalTitle = "Complex Arcade";
const originalFavicon = "/images/logo.png";


window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("websiteTitle").value = localStorage.getItem("customTitle") || originalTitle;
    document.getElementById("faviconUrl").value = localStorage.getItem("customFavicon") || originalFavicon;
});

// Script 2 \\

function setCustomSettings() {
    const title = document.getElementById("websiteTitle").value;
    const faviconUrl = document.getElementById("faviconUrl").value;

    if (title) {
        document.title = title;
        localStorage.setItem("customTitle", title);
    }
    if (faviconUrl) {
        let link = document.querySelector("link[rel*='icon']") || document.createElement("link");
        link.type = "image/x-icon";
        link.rel = "shortcut icon";
        link.href = faviconUrl;
        document.getElementsByTagName("head")[0].appendChild(link);
        localStorage.setItem("customFavicon", faviconUrl); 
    }
}

function resetCustomSettings() {
    localStorage.removeItem("customTitle");
    localStorage.removeItem("customFavicon");
    location.reload();
}

// Script 3 \\

function resetCustomSettings() {
    localStorage.removeItem("customTitle");
    localStorage.removeItem("customFavicon");


    document.title = originalTitle;
    let link = document.querySelector("link[rel*='icon']") || document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = originalFavicon;
    document.getElementsByTagName("head")[0].appendChild(link);


    document.getElementById("websiteTitle").value = originalTitle;
    document.getElementById("faviconUrl").value = originalFavicon;
}

window.addEventListener("DOMContentLoaded", function() {
    const customTitle = localStorage.getItem("customTitle");
    if (customTitle) {
        document.title = customTitle;
    }
    const customFavicon = localStorage.getItem("customFavicon");
    if (customFavicon) {
        let link = document.querySelector("link[rel*='icon']") || document.createElement("link");
        link.type = "image/x-icon";
        link.rel = "shortcut icon";
        link.href = customFavicon;
        document.getElementsByTagName("head")[0].appendChild(link);
    }
});
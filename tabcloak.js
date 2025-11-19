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


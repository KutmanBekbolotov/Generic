document.addEventListener("DOMContentLoaded", function() {
    const linksContainer = document.getElementById("linksContainer");
    const showLinksButton = document.getElementById("showLinks");

    if (linksContainer && showLinksButton) {
        showLinksButton.addEventListener("click", function() {
            if (linksContainer.style.display === "none" || linksContainer.style.display === "") {
                linksContainer.style.display = "block";
            } else {
                linksContainer.style.display = "none";
            }
        });
    }
});

function toggleLinks() {
    const linksContainer = document.getElementById("linksContainer");
    if (linksContainer.style.display === "none" || linksContainer.style.display === "") {
        linksContainer.style.display = "block";
    } else {
        linksContainer.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const openMapButton = document.getElementById("openMapButton");
    const mapOverlay = document.getElementById("mapOverlay");
    const closeMapButton = document.getElementById("closeMapButton");

    openMapButton.addEventListener("click", function() {
        mapOverlay.style.display = "block"; 

        const mapContainer = document.getElementById("mapContainer");
        const map = L.map(mapContainer).setView([42.8746, 74.5698], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    });

    closeMapButton.addEventListener("click", function() {
        mapOverlay.style.display = "none"; 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const openMapButton = document.getElementById("openMapButton");
    const mapOverlay = document.getElementById("mapOverlay");
    const closeMapButton = document.getElementById("closeMapButton");
    const closeFavoritesButton = document.getElementById("closeFavoritesButton");
    const closeNewsButton = document.getElementById("closeNewsButton");

    openMapButton.addEventListener("click", function() {
        mapOverlay.style.display = "block";
        // Ваши действия для открытия карты
    });

    closeMapButton.addEventListener("click", function() {
        mapOverlay.style.display = "none";
        // Ваши действия для закрытия карты
    });

    // Добавляем обработчик для закрытия избранного
    closeFavoritesButton.addEventListener("click", function() {
        document.getElementById("favoritesOverlay").style.display = "none";
        // Ваши действия для закрытия избранного
    });

    // Добавляем обработчик для закрытия новостей
    closeNewsButton.addEventListener("click", function() {
        document.getElementById("newsOverlay").style.display = "none";
        // Ваши действия для закрытия новостей
    });
});

// Функции toggleFavorites и toggleNews, если они вам нужны
function toggleFavorites() {
    const favoritesOverlay = document.getElementById("favoritesOverlay");
    favoritesOverlay.style.display = favoritesOverlay.style.display === "block" ? "none" : "block";
}

function toggleNews() {
    const newsOverlay = document.getElementById("newsOverlay");
    newsOverlay.style.display = newsOverlay.style.display === "block" ? "none" : "block";
}

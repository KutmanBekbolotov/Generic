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
    });

    closeMapButton.addEventListener("click", function() {
        mapOverlay.style.display = "none";
    });

    closeFavoritesButton.addEventListener("click", function() {
        document.getElementById("favoritesOverlay").style.display = "none";
    });

    closeNewsButton.addEventListener("click", function() {
        document.getElementById("newsOverlay").style.display = "none";
    });
});

function toggleFavorites() {
    const favoritesOverlay = document.getElementById("favoritesOverlay");
    favoritesOverlay.style.display = favoritesOverlay.style.display === "block" ? "none" : "block";
}

function toggleNews() {
    const newsOverlay = document.getElementById("newsOverlay");
    newsOverlay.style.display = newsOverlay.style.display === "block" ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");

    const restaurants = [
        { id: 1, name: "Чайхана Navat", rating: 4.5, photo: "images/navat.jpg" },
        { id: 2, name: "Кофейня Бублик", rating: 4.0, photo: "images/bublik.jpg" },
        { id: 3, name: "Ресторан Корейской кухни", rating: 4.2, photo: "images/korean.jpg" }
        // Добавьте сюда другие заведения
    ];

    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const searchText = searchInput.value.toLowerCase().trim();
            const foundRestaurant = searchRestaurants(searchText);
            if (foundRestaurant) {
                window.location.href = `restaurant${foundRestaurant.id}.html`;
            } else {
                alert("Заведение не найдено");
            }
        }
    });

    function searchRestaurants(searchText) {
        for (let i = 0; i < restaurants.length; i++) {
            if (restaurants[i].name.toLowerCase().includes(searchText)) {
                return restaurants[i];
            }
        }
        return null;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".search-bar input");
    const searchButton = document.querySelector(".search-bar button");

    searchButton.addEventListener("click", function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm !== "") {
            searchRestaurants(searchTerm);
        }
    });

    function searchRestaurants(searchTerm) {
       
        if (searchTerm === "navat" || searchTerm === "Navat" || searchTerm === "Нават" || searchTerm === "нават") {
            window.location.href = "restaurant1.html";
        } 
        if (searchTerm === "кофейня бублик" || searchTerm === "бублик" || searchTerm === "Бубулик") {
            window.location.href = "restaurant2.html";
        }
        if (searchTerm === "Savanna" || searchTerm === "savanna" || searchTerm === "саванна") {
            window.location.href = "restaurant3.html";
        } else {
            alert("Заведение не найдено");
        }
    }
});

function redirectToPage(restaurantId) {
    
    if (restaurants[restaurantId]) {
     
        window.location.href = `restaurant_${restaurantId}.html`;
    } else {
       
        window.location.href = "not_found.html";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.querySelector(".back-button");

    backButton.addEventListener("click", function() {
        window.history.back();
    });
});




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
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const mapButton = document.getElementById("mapButton");
    mapButton.addEventListener("click", function() {
        
        window.open("https://google.com/maps", "_blank");
    });

});



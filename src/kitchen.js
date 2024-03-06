let previousCuisine = null;

function toggleRestaurants(cuisine) {
    const restaurantsContainer = document.getElementById("restaurantsContainer");

    if (previousCuisine === cuisine) {
        restaurantsContainer.style.display = "none";
        previousCuisine = null;
    } else {
        showRestaurants(cuisine);
        previousCuisine = cuisine;
    }
}

function showRestaurants(cuisine) {
    const restaurantsContainer = document.getElementById("restaurantsContainer");
    restaurantsContainer.innerHTML = "";

    const restaurants = getRestaurantsByCuisine(cuisine);

    restaurants.forEach(restaurant => {
        const restaurantElement = document.createElement("div");
        restaurantElement.classList.add("restaurant");
        restaurantElement.innerHTML = `<h3>${restaurant.name}</h3><p>${restaurant.description}</p>`;
        restaurantsContainer.appendChild(restaurantElement);
    });

    restaurantsContainer.style.display = "block";
}

function getRestaurantsByCuisine(cuisine) {

    const restaurantsByCuisine = {
        "Корейская кухня": [
            { name: "Ресторан Корейской кухни 1", description: "Описание ресторана 1" },
            { name: "Ресторан Корейской кухни 2", description: "Описание ресторана 2" },
        ],
        "Fast food": [
            { name: "Ресторан Fast food 1", description: "Описание ресторана 1" },
            { name: "Ресторан Fast food 2", description: "Описание ресторана 2" },
        ],
        "Европейская кухня": [
            { name: "Ресторан Европейская кухня", description: "Описание ресторана 1" },
            { name: "Ресторан Европейская кухня", description: "Описание ресторана 2" },
        ],
        "Грузинская кухня": [
            { name: "Ресторан Грузинская кухня", description: "Описание ресторана 1" },
            { name: "Ресторан Грузинская кухня", description: "Описание ресторана 2" },
        ],
        "Чайхана": [
            { name: "Чайхана", description: "Описание ресторана 1" },
            { name: "Чайхана", description: "Описание ресторана 2" },
        ],
        "Кофейня": [
            { name: "Кофейня", description: "Описание ресторана 1" },
            { name: "Кофейня", description: "Описание ресторана 2" },
        ],
        "Кафе": [
            { name: "Кафе", description: "Описание ресторана 1" },
            { name: "Кафе", description: "Описание ресторана 2" },
        ],
        "Шашлычная": [
            { name: "Шашлычная", description: "Описание ресторана 1" },
            { name: "Шашлычная", description: "Описание ресторана 2" },
        ],
        "Столовая": [
            { name: "Столовая", description: "Описание ресторана 1" },
            { name: "Столовая", description: "Описание ресторана 2" },
        ],
    };

    return restaurantsByCuisine[cuisine] || [];
}
function hideRestaurants() {
    const restaurantsContainer = document.getElementById("restaurantsContainer");
    restaurantsContainer.style.display = "none";
}

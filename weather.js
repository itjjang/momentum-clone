const weather = document.querySelector("#weather");
const WEATHER_API_KEY = "32ebbccbc63b484cb5eca08400e3f169";
const COORDS = "coords";

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log(`Can't access geo location`);
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function saveCoords(position) {
    localStorage.setItem(COORDS, JSON.stringify(position));
}

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const place = json.name;
            const temperature = json.main.temp;
            weather.innerText = `${temperature} @ ${place}`;
        });
}

function loadCoords() {
    const loadedCoords = JSON.parse(localStorage.getItem(COORDS));
    if(loadedCoords) {
        getWeather(loadedCoords.latitude, loadedCoords.longitude);
    } else {
        askForCoords();
    }
}

function init() {
    loadCoords();
}

init();

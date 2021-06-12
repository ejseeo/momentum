const weather = document.querySelector(".js-weather");
API_KEY = "14e3c0d415d725fad1d22cf39b268d6b";
const COORDS = "coords";


function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json()
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        const currentWeather = json.weather[0].main;
        weather.innerText = `${currentWeather}, ${temperature}℃ @ ${place}`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const  coordsObj = {
        latitude,
        longitude
    } ;
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    alert("Can not access geo location.");
}

function init(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }    
}

init();
setInterval(init, 1000*60*60);
//setInterval(init, 10000);


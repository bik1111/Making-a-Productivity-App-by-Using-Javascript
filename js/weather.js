const API_KEY = "23e814056b57e1a6af012654c1d6aa43";



function onGeoOk (position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    //자바스크립트가 url을 불러옴.
    fetch(url).then(response => response.json())
    .then(data => {
        const city = document.querySelector("#weather span:last-child");
        const degree = document.querySelector("#weather-2");
        const weather = document.querySelector("#weather span:first-child");
        city.innerText = data.name;
        degree.innerText = data.main.temp;
        weather.innerText =  data.weather[0].main;
    });
    
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
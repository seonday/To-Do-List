const API_KEY = "6a4450a1569203f078003b02cbec068d";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:nth-child(1)");
            const city = document.querySelector("#weather span:nth-child(2)");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} ${data.main.temp}℃, `;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
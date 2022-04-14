const vientoValue = document.querySelector(".card__footer__data__vientoValue");
const tempValue = document.querySelector(".card__footer__data__tempValue");
const city = document.querySelector(".card__city");
const statusValue = document.querySelector(".card__status");
const humidity = document.querySelector(".card__footer__data__humedadValue");
var img = document.querySelector(".main__card__header__img");
const CardWeather = new Screen(city, statusValue, tempValue, vientoValue, humidity);

var cityValue = {
    city: "null",
    temp: "null",
    windSpeed: "null",
    status: "null",
    humidity: "null"
}
addEventListener('load', ()=>{
    let lat;
    let lon;
    let city;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion =>{
            lon = posicion.coords.longitude;
            lat = posicion.coords.latitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c7e5db7318795903c94124cb561f1803&lang=es&units=metric`;

            fetch(url)
            .then(response =>{return response.json()} )
            .then(data =>{
                console.log(data);
                cityValue.city = data.name;
                cityValue.status = data.weather[0].description;
                cityValue.humidity = data.main.humidity;
                cityValue.temp = data.main.temp;
                cityValue.windSpeed = data.wind.speed;
                CardWeather.imp(cityValue);
                console.log(cityValue.humidity)
                setIcon(data.weather[0].main);
            })
        })
    }
})

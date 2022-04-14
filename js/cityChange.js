const button = document.querySelector(".main__search__button");
const input = document.querySelector(".main__search__input");
const vientoValue1 = document.querySelector(".card__footer__data__vientoValue");
const tempValue1 = document.querySelector(".card__footer__data__tempValue");
const city1 = document.querySelector(".card__city");
const statusValue1 = document.querySelector(".card__status");
const humidity1 = document.querySelector(".card__footer__data__humedadValue");
const CardWeather1 = new Screen(city1, statusValue1, tempValue1, vientoValue1, humidity1    );
var img = document.querySelector(".main__card__header__img");

var cityValue = {
    city: "null",
    temp: "null",
    windSpeed: "null",
    status: "null",
    humidity: "null"
}
button.addEventListener('click', (e)=>{
    e.defaultPrevented;
    let finalURL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=c7e5db7318795903c94124cb561f1803&lang=es&units=metric`;
    fetch(finalURL)
        .then(Response => {return Response.json()})
        .then(data =>{
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
input.addEventListener('keyup', (e)=>{
    if(e.key == "Enter"){
        let finalURL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=c7e5db7318795903c94124cb561f1803&lang=es&units=metric`;
        fetch(finalURL)
            .then(Response => {return Response.json()})
            .then(data =>{
                cityValue.city = data.name;
                cityValue.status = data.weather[0].description;
                cityValue.humidity = data.main.humidity;
                cityValue.temp = data.main.temp;
                cityValue.windSpeed = data.wind.speed;
                CardWeather.imp(cityValue);
                console.log(cityValue.humidity)
                setIcon(data.weather[0].main);
    })
    }
})
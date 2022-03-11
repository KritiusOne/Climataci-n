const paneles = document.querySelectorAll(".info");
const viento = document.querySelector(".vel-viento");
const ciudad = document.querySelector(".city");
const estado = document.querySelector(".status");
addEventListener('load', ()=>{
    let lat;
    let lon;
    let city;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion =>{
            lon = posicion.coords.longitude;
            lat = posicion.coords.latitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c7e5db7318795903c94124cb561f1803           `;
            const urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c7e5db7318795903c94124cb561f1803`

            fetch(url)
            .then(response =>{return response.json()} )
            .then(data =>{
                console.log(data);
                 viento.innerHTML = `<h2 class='vel-viento__title'>${data.wind.speed} m/s</h2>`;
                 let status = data.weather[0].description;
                 let temp = Math.round(data.main.temp);
                 estado.innerHTML= `<h2 class='status__description'>${status}</h2>
                 <h3 class='status__temp'>${temp}°C</h3>`;
                 ciudad.innerHTML = `<h2 class='city__name'>${data.name}</h2>`
            })
        })
    }
})
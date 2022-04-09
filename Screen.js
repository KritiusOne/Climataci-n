class Screen {
    constructor(city, status, temp, windSpeed, humidity){
        this.city = city;
        this.status = status;
        this.temp = temp;
        this.windSpeed = windSpeed;
        this.humidity = humidity;
    }
    imp(CityData){
        this.city.textContent = CityData.city;
        this.status.textContent = CityData.status;
        this.temp.textContent = `${CityData.temp}°C`;
        this.windSpeed.textContent = `${CityData.windSpeed}m/s`;
        this.humidity.textContent = CityData.humidity;
    }
}
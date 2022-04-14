const setIcon = (main) => {
    if(main == "clear"){
        img.src = "Icons\\weather\\day.svg";
    }else if(main == "rain"){
        img.src = "Icons\\rain\\rainy-1.svg";
    }else if(main == "Clouds"){
        img.src = "Icons\\clouds\\cloudy-day-1.svg";
    }else if(main == "Snow"){
        img.src = "Icons\\snow\\snowy-1.svg";
    }else if(main == "Drizzle"){
        img.src = "Icons\\rain\\rainy-7.svg";
    }else if(main == "Thunderstorm"){
        img.src = "Icons\\rain\\thunder.svg";
    }else if(main == "Atmosphere"){

    }
}
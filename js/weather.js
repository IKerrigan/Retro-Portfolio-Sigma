const cityName = "Kyiv";

class WeatherProvider {
    API_KEY = 'e17f41616c0388bcaba5d1019df34ac5'

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.API_KEY}&units=metric`)
        return response.json();
    }

    getIconURL(weather) {
        return `https://openweathermap.org/img/wn/${weather.icon}.png`;
    }
}

const provider = new WeatherProvider();

provider.getWeather().then(r => {
    const speed = document.getElementById("w-speed")
    const desc = document.getElementById("w-desc")
    const icon = document.getElementById('w-icon')
    const temp = document.getElementById("w-temp")
    const city = document.getElementById("w-city")
    const hum = document.getElementById("w-hum")

    const weather = r.weather[0]
    icon.src = provider.getIconURL(weather);
    speed.innerText = r.wind.speed + ' m/s'
    hum.innerText = r.main.humidity + '%'
    temp.innerText =  r.main.temp + '°C'
    desc.innerText = weather.main
    city.innerText = cityName
})

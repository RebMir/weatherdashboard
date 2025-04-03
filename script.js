document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

async function getWeather() {
    const apiKey = "339aca5e7834f320d687470cd10f298a";  // Replace with your OpenWeather API Key
    const city = document.getElementById("cityInput").value.trim();

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        document.getElementById("weatherInfo").classList.remove("hidden");
        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("windSpeed").textContent = `Wind Speed: ${data.wind.speed} m/s`;
        document.getElementById("weatherIcon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    } catch (error) {
        alert("Error: " + error.message);
    }
}

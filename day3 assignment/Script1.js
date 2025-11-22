// JavaScript source code
const apiKey = '1876e28f7953e50ea1b22d45d686a142'; 
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const cityNameSpan = document.getElementById('cityName');
const temperatureSpan = document.getElementById('temperature');
const descriptionSpan = document.getElementById('description');
const humiditySpan = document.getElementById('humidity');
const windSpeedSpan = document.getElementById('windSpeed');
const weatherInfoDiv = document.getElementById('weatherInfo');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeatherData(city);
    } else {
        alert('Please enter a city name.');
    }
});

async function getWeatherData(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            displayWeatherData(data);
        } else {
            alert(`Error: ${data.message || 'City not found'}`);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Could not retrieve weather data. Please try again later.');
    }
}

function displayWeatherData(data) {
    cityNameSpan.textContent = data.name;
    temperatureSpan.textContent = data.main.temp;
    descriptionSpan.textContent = data.weather[0].description;
    humiditySpan.textContent = data.main.humidity;
    windSpeedSpan.textContent = data.wind.speed;
    weatherInfoDiv.style.display = 'block';
}

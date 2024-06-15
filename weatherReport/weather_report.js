function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;

    const apiKey = 'fad24c72e9d0b5b2eb95ad29d3a207da';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>`;
    });
}

function showweatherDetails(event) {
    event.preventDefault();

    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    const apiKey = 'fad24c72e9d0b5b2eb95ad29d3a207da';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp - 273} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
document.getElementById('weatherForm').addEventListener('weatherCoord', showweatherDetailsCoord);
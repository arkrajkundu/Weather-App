const apiKey = "62cc400d723b1a0e18c2dce5534bfe2c";
const URL = `https://api.openweathermap.org/data/2.5/weather`;

const searchBtn = document.querySelector('.search-btn');
const cityName = document.querySelector('.city');
const cityTemp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity .value');
const windSpeed = document.querySelector('.windspeed .value');
const weather = document.querySelector('.weather');
const error = document.querySelector('.error');
const searchInput = document.querySelector('.search-box-input')
const tempIcon = document.querySelector('.icon');

async function getWeatherReport(city) {
  const response = await fetch(URL + `?q=${city}&appid=${apiKey}&units=metric`);
  let data = await response.json();
  if (response.status === 404) {
    error.style.display = "flex";
    weather.style.display = "none";
  }
  else {
    cityName.innerText = data.name;
    cityTemp.innerText = Math.round(data.main.temp) + "°C";
    windSpeed.innerText = data.wind.speed;
    humidity.innerText = data.main.humidity;
    weather.style.display = "flex";
    error.style.display = "none";
    tempIcon.src = `images/${(data.weather[0].main).toLowerCase()}.png`;
    console.log(data);
  }
}

searchBtn.addEventListener("click", () => {
  let currentCity = searchInput.value;
  getWeatherReport(currentCity);
})

searchInput.addEventListener("keypress", () => {
  if (event.key === "Enter") {
    let currentCity = searchInput.value;
    getWeatherReport(currentCity);
  }
})
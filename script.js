"use strict";

const inputField = document.querySelector("input");
const btnSearch = document.querySelector("button");
const temp = document.querySelector(".temp");
const cityyy = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");
const icon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4607e05bf890fd7d0e954b00312ea263&units=metric`
  );
  const data = await response.json();

  temp.innerHTML = `${Math.round(data.main.temp)}°C`;
  cityyy.innerHTML = data.name;
  humidity.innerHTML = `${data.main.humidity}%`;
  windSpeed.innerHTML = `${data.wind.speed} km/h`;

  if (data.weather[0].main === "Clear") {
    icon.src = "img/clear.png";
  } else if (data.weather[0].main === "Clouds") {
    icon.src = "img/clouds.png";
  } else if (data.weather[0].main === "Mist") {
    icon.src = "img/mist.png";
  } else if (data.weather[0].main === "Drizzle") {
    icon.src = "img/drizzle.png";
  } else if (data.weather[0].main === "Snow") {
    icon.src = "img/snow.png";
  } else if (data.weather[0].main === "Rain") {
    icon.src = "img/rain.png";
  }
  inputField.blur();
}
checkWeather("seoul");

btnSearch.addEventListener("click", function () {
  checkWeather(inputField.value);
});

inputField.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkWeather(inputField.value);
  }
});

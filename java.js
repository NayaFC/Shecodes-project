let now = new Date();
let currentTime = document.querySelector("#date");

let hour = now.getHours();
let minute = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

currentTime.innerHTML = `${day} ${hour}:${minute}`;

function currentCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#inputValue");
  search(cityElement.value);
}

function search(city) {
  let apiKey = "5293d8454b519c30f6f6331f38c85b4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemp);
  console.log(search);
}

function showTemp(response) {
  let h1 = document.querySelector("#city");
  h1.innerHTML = response.data.name;
  let temp = Math.round(response.data.main.temp);
  let h2 = document.querySelector("#temperture");
  h2.innerHTML = `${temp} ℃`;
}

let form = document.querySelector("#formInput");
form.addEventListener("submit", currentCity);

function searchPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getLocation);
}

function getLocation(position) {
  let key = "6bfa54f242cbb59343d4e58db578dc61";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
  axios.get(url).then(showTemp);
}

let showLocation = document.querySelector("#location");
showLocation.addEventListener("click", searchPosition);

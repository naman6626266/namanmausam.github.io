const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "009695a0a7msh64a6634398553b9p17e9c2jsn793db2e12706",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
    cityName.innerHTML=city
fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,options)
  .then(response => response.json())
  .then((response) => {
    console.log(response)
    temp.innerHTML = response.temp;
    humidity.innerHTML = response.humidity;
    feels_like.innerHTML = response.feels_like;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
    cloud_pct.innerHTML = response.cloud_pct;
  })
  .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

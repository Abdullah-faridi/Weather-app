import "./styles.css";

const apiKey = "9684a6d8834c6f067df1da442108e8f9";

const weatherBtn = document.getElementById("btnSearch");

async function getWeather() {
  const city = document.getElementById("search").value.trim();
  const weather = document.querySelector("#container");

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    
    if (data.cod === 200) {
      
      weather.className = "weather-details";
      weather.style.display = "flex"; 

      const temp = data.main.temp;
      const feelsLike = data.main.feels_like;
      const pressure = data.main.pressure;
      const humidity = data.main.humidity;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      weather.innerHTML = `
      
        <h2>${city}</h2>
        <img src="${iconUrl}" alt="weather icon" />
        <h3>${description}</h3>
        <p>Temperature: ${temp}°C</p>
        <p>Feels Like: ${feelsLike}°C</p>
        <p>Pressure: ${pressure} hPa</p>
        <p>Humidity: ${humidity}%</p>
      `;
    } else {
      alert("City not found");
      weather.innerHTML = "";
    }
  } catch (error) {
    weather.innerText = "⚠️ Failed to fetch weather data.";
    console.error(error);
  }
}

weatherBtn.addEventListener("click", getWeather);





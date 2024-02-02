import React, { useState } from "react";
import axios from "axios";

import "./App.css";

export default function App() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0dc40d3d7cda209ca40e77430c74cf57&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        className="city-input"
        onChange={updateCity}
      />
      <input type="submit" value="search" className="search-button" />
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        <div className="city-and-search">
          {form}
          <h1>{city}</h1>
        </div>

        <div className="main-container">
          <div className="weather-container">
            <div>
              <img src={weather.icon} alt={weather.description} />
            </div>
            <div className="weather-temperature">
              {Math.round(weather.temperature)}
            </div>
            <div className="weather-temperature-unit">°C</div>
          </div>
          <p className="weather-details">
            <span id="time">Tuesday 14.00pm</span>
            <br />
            Humidity: <span className="humidity-input">{weather.humidity}</span>
            %, Wind:
            <span className="wind-input">{weather.wind}km/h</span>
          </p>
        </div>
      </div>
    );
  } else {
    return form;
  }
}

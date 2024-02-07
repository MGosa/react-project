import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready:true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Monday 09.45pm",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>{weather.city}</h1>
        <ul>
          <li>{weather.date}</li>
          <li className="text-capitalize">{weather.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weather.iconUrl} alt={weather.description} />
            <span className="temperature">
              {Math.round(weather.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>


          <div className="col-6">
            <ul>
              <li>Precipitation: 90% </li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
    
  } else {
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    let city = "Glasgow";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

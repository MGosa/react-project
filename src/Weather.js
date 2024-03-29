import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity]=useState(props.defaultCity);

    function handleResponse(response){
    setWeather({
      ready:true,
      coordinates:response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    }
 
  

  function handleSubmit(event){
    event.preventDefault();
     search();
  }

  function handleCityChange(event){
    setCity(event.target.value);
   
  }
   function search() {
     const apiKey = "3f6be1c407b0d9d1933561808db358ba";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);
   }

     if (weather.ready) {
       return (
         <div className="Weather">
           <form onSubmit={handleSubmit}>
             <div className="row">
               <div className="col-9">
                 <input
                   type="search"
                   placeholder="Enter a city..."
                   className="form-control"
                   autoFocus="on"
                   onChange={handleCityChange}
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
           <WeatherInfo data={weather} />
         <WeatherForecast coordinates={weather.coordinates}/>
         </div>
       );
     } else {
       search();
       return "Loading...";
     }
   }

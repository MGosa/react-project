import axios from "axios";
import  { useState, useEffect} from "react";
import WeatherForecstDay from "./WeatherForecstDay.js";
import "./WeatherForecast.css";


export default function WeatherForecast(props){
  let[loaded, setLoaded]=useState(false);
  let[forecast, setForecast]=useState(null);

  useEffect(() => {
    setLoaded(false);
  },[props.coordinates]);

function handleResponse(response){
setForecast(response.data.daily);
setLoaded(true);
}
 function load(){
let apiKey = "3f6be1c407b0d9d1933561808db358ba";
let latitude = props.coordinates.lat;
let longitude = props.coordinates.lon;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
 }

  
if(loaded){
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index){
            if (index<5){
              return (
                <div className="col" key={index}>
                  <WeatherForecstDay
                    data={dailyForecast}
                    icon={`https://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}@2x.png`}
                  />
                </div>
              );
          }else{
            return null;
          }
          })}
        </div>
      </div>
    );
    }else{
      load();

      return null;
      
    }
}

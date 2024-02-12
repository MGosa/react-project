

export default function WeatherForecstDay(props){

    function maxTemperature(){
        let temperature=Math.round(props.data.temp.max);
         return `${temperature}°`;
    }
    function minTemperature() {
      let temperature = Math.round(props.data.temp.min);
      return `${temperature}°`;
    }
    function day(){
        let date= new Date(props.data.dt * 1000);
        let day=date.getDay();

        let days=["Sun","Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

        return days[day];
    }

    return (
      <div className="WeatherForecstDay">
        <div>{day()}</div>

        <img
          src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
          alt="cloudy"
        />

        <div>
          <span className="maxTemerature">{maxTemperature()}</span>
          <span className="minTemperature">{minTemperature()}</span>
        </div>
      </div>
    );
}
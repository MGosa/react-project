

export default function WeatherTemperature(props) {


    return (
      <div className="WeatherTemeraure">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className={"unit"}>
          °C 
        </span>
      </div>
    );
  } 


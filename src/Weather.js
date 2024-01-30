import axios from "axios";

export default function Weather() {
  function displayTemp(response) {
    alert(
      `The temperature in Glasgow is ${Math.round(response.data.main.temp)}`
    );
  }
  let url = (`https://api.openweathermap.org/data/2.5/weather?q=glasgow&appid=0dc40d3d7cda209ca40e77430c74cf57&units=metric`);
  axios.get(url).then(displayTemp);
  
  
}

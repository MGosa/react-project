   
   import './Weather.css';




export default function Weather(){
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
             <input type="submit" value="Search" className="btn btn-primary w-100" />
           </div>
         </div>
       </form>

       <h1>Glasgow</h1>
       <ul>
         <li>Monday 09.45am</li>
         <li>Light Rain</li>
       </ul>
       <div className="row">
         <div className="col-6">
           <img
             src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
             alt="Light rain"
           />
           <span className="temperature">11</span>
           <span className="unit">°C</span>
         </div>
         <div className="col-6">
           <ul>
             <li>Precipitation: 90% </li>
             <li>Humidity: 92%</li>
             <li>Wind: 9 mph</li>
           </ul>
         </div>
       </div>
     </div>
   );
      
  
}
import { useState, useEffect } from 'react';
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

//const api_Key = "ffa0b90167d0d02cd5ac0edd060cf3a7";

function App() {
  const [weather, setWeather]=useState(null);
  const cities =["new york", "bangkok","tokyo"]
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherCurrentLocation(lat, lon);
    });
  }
    const getWeatherCurrentLocation = async (lat, lon) => {
      let url = new URL(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ffa0b90167d0d02cd5ac0edd060cf3a7&units=metric`
      );
      const response = await fetch(url);
      let data = await response.json();
      console.log("데이타", data);
      setWeather(data)
    };
  
  useEffect(() => {
    getCurrentLocation();
  }, []);


  return(

    <div className='main'>
      <WeatherBox weather={weather} />
    <WeatherButton cities={cities}/>
    </div>

  )
}


export default App;

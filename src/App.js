import { useState, useEffect } from "react";
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

//const api_Key = "ffa0b90167d0d02cd5ac0edd060cf3a7";
const cities = ["new york", "bangkok", "tokyo"];


function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiError, setAPIError] = useState("");



  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherCurrentLocation(lat, lon);
    });
  };

  const getWeatherCurrentLocation = async (lat, lon) => {
    try{
    let url = new URL(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ffa0b90167d0d02cd5ac0edd060cf3a7&units=metric`
    );
    const response = await fetch(url);
    let data = await response.json();
    console.log("데이타", data);
    setWeather(data);
    setLoading(false);
  }catch(err){
    setAPIError(err.message);
      setLoading(false);
  }
  };

  const getWeatherByCity = async () => {
    try {
    let url = new URL(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ffa0b90167d0d02cd5ac0edd060cf3a7&units=metric`
    );
    const response = await fetch(url);
    let data = await response.json();
    console.log("데이타", data);
    setWeather(data);
    setLoading(false);
  }catch(err){
    setAPIError(err.message);
      setLoading(false);
  }
  };



  useEffect(() => {
    if (city == null) {
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city]);


  const handleCityChange = (city) => {
    if (city==="current"){
     setCity(null)
    }else{
     setCity(city)
    }
   };


  return (
    <Container className="vh-100">
      {loading ? (
        <div>
          <ClipLoader color="#000" loading={loading} size={100} />
        </div>
      ) : !apiError ? (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            handleCityChange={handleCityChange}
            
            setCity={city}
          />
        </div>
      ) :(
        apiError
      )}
    </Container>
  );
}

export default App;

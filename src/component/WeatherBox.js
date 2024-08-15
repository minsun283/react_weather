import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather??",weather)
  return (<div className='temp-box'>
    <div>내위치 {weather && weather.name} </div>
    <h1>{weather && weather.main.temp}</h1>
    <h3>{weather?.weather[0].description}</h3>
    <div>최고온도 {weather?.main.temp_max}/ 최저온도 {weather?.main.temp_min}</div>
    </div>
  )
}

export default WeatherBox
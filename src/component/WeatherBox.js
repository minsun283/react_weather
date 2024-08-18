import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather??",weather)
  return (<div className='temp-box'>
    <div className='location'>{weather && weather.name} </div>
    <h1 className='big-font'>{weather && weather.main.temp.toFixed(1)}℃</h1>
    <h3>{weather?.weather[0].description}</h3>
    <div>최고{weather?.main.temp_max.toFixed(1)} / 최저{weather?.main.temp_min.toFixed(1)}</div>
    </div>
  )
}

export default WeatherBox
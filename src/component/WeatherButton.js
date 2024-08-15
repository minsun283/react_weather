import React from 'react'

const WeatherButton = ({cities}) => {
  return (
    <div>
      <button>현재위치</button>
      {cities.map((item)=>(
        <button>{item}</button>
      ))}
    </div>
  )
}

export default WeatherButton
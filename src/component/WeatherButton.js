import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, handleCityChange}) => {
  return (
    <div className='btn-deco'>
      <Button variant={`${setCity==null?"info":"outline-light"}`} onClick={()=>handleCityChange("current")}>현재위치</Button>


      {cities.map((item)=>(
        <Button variant={`${setCity==item?"info":"outline-light"}`} className='m-2' onClick={()=>handleCityChange(item)}>{item}</Button>
      ))}
    </div>
  )
}

export default WeatherButton
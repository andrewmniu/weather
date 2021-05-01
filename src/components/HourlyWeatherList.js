import React from 'react'
import HourlyWeather from "./HourlyWeather.js";
import ListGroup from "react-bootstrap/ListGroup";

const HourlyWeatherList = ({weather}) => {
  return (
    <>
      <ListGroup variant="flush">
        {weather.map((hour, idx) => {
          return <ListGroup.Item key={idx}><HourlyWeather weather={hour}/></ListGroup.Item>
        })}
      </ListGroup>

    </>
  )
}

export default HourlyWeatherList

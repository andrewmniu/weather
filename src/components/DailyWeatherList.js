import React from 'react'
import DailyWeather from "./DailyWeather.js";
import ListGroup from "react-bootstrap/ListGroup";

const DailyWeatherList = ({weather}) => {
  return (
    <div>
      <ListGroup variant="flush">
        {weather.map((day, idx) => {
          return <ListGroup.Item key={idx}><DailyWeather weather={day}/></ListGroup.Item>
        })}
      </ListGroup>
    </div>
  )
}

export default DailyWeatherList;

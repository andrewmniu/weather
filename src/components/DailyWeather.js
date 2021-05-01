import React from 'react'

const DailyWeather = ({weather}) => {
  const formatDate = () => {
    let d = new Date(0)
    d.setUTCSeconds(weather.dt)
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return d.toLocaleString('en-US', options)
  }

  return (
    <div className="container hourly-weather">
      <div className="row align-items-center justify-content-evenly">
        <div className="col ">
          <p className="daily-temperature">{Math.round(weather.temp.max)}&deg;F</p>
          <span className="low">/{Math.round(weather.temp.min)}&deg;F</span>
        </div>
        <div className="col interval-description">
          <img
            id="wicon"
            width="75"
            height="75"
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt="Weather icon"
            />
          {weather.weather[0].description}
        </div>
        <div className="col date">
          {formatDate(weather.dt)}
        </div>
      </div>
    </div>
  )
}

export default DailyWeather

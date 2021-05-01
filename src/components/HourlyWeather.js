import React from 'react'

const HourlyWeather = ({weather}) => {
  const formatDate = () => {
    let d = new Date(0)
    d.setUTCSeconds(weather.dt)
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
    return d.toLocaleString('en-US', options)
  }

  return (
    <div className="container hourly-weather">
      <div className="row align-items-center justify-content-evenly">
        <div className="col interval-description">
          <img
            width="75"
            height="75"
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt="Weather icon"
            />
          {weather.weather[0].description}
        </div>
        <div className="col">
          <p className="hourly-temperature">{Math.round(weather.temp)}&deg;F</p>
        </div>
        <div className="col date">
          {formatDate(weather.dt)}
        </div>
      </div>
    </div>
  )
}

export default HourlyWeather

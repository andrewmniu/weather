import React from "react";

const CurrentWeather = ({ weather }) => {
  const formatDate = () => {
    let d = new Date(0)
    d.setUTCSeconds(weather.dt)
    const options = {hour: 'numeric', minute: '2-digit', timeZoneName: 'short' };
    return d.toLocaleTimeString('en-US', options)
  }

  return (
    <div className="container current-weather">
      <div className="row align-items-center justify-content-evenly">
        <h2>Current Weather</h2>
        <div className="col">
          <p>As of {formatDate()}</p>
          <p className="current-temperature">{Math.round(weather.temp)}&deg;F</p>
          <p>Feels like: {Math.round(weather.feels_like)}&deg;F</p>
      </div>
        <div className="col">
          <img
            id="wicon"
            width="100"
            height="100"
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt="Weather icon"
            />
          <p className="description">{weather.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

import { React, useState } from "react";
import CurrentWeather from "./CurrentWeather.js";
import HourlyWeatherList from "./HourlyWeatherList.js";
import DailyWeatherList from "./DailyWeatherList.js";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

const Dashboard = ({
  weather,
  location,
  searchText,
  hideAlert,
  onChange,
  onSubmit,
}) => {
  const [interval, setInterval] = useState("hourly");

  const onClick = (e) => {
    setInterval(e.target.id);
  };

  return (
    <div className="container">
      <h1>Weather Forecast for {location}</h1>
      <Alert variant="danger" hidden={hideAlert}>
        Please type in a valid city/zipcode
      </Alert>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={searchText}
          placeholder="City name or zip"
          className="location-search"
          onChange={onChange}
        />
      </form>
      <CurrentWeather weather={weather.current} />
      <h2 id="forecast">{interval} Forecast</h2>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#hourly">
            <Nav.Item>
              <Nav.Link href="#hourly" id="hourly" onClick={onClick}>
                Hourly
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#daily" id="daily" onClick={onClick}>
                Daily
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          {interval === "hourly" ? (
            <HourlyWeatherList weather={weather.hourly} />
          ) : (
            <DailyWeatherList weather={weather.daily} />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;

import "./App.css";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard.js";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState(22903);
  const [hideAlert, setHideAlert] = useState(true);

  useEffect(() => {
    getWeather(location);
  }, []);

  const getCoordinates = (zip) => {
    let latitude, longitude;
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("zip", zip);
    return fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        if (obj.cod === 200) {
          latitude = obj.coord.lat;
          longitude = obj.coord.lon;
          return [latitude, longitude];
        }
        else{
          return [null,null]
        }
      });
  };

  const getWeather = async (zip) => {
    let lat, long;
    await getCoordinates(zip).then((coords) => {
      lat = coords[0];
      long = coords[1];
    });

    if (lat === null && long === null) {
      return "error";
    }

    const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("lat", lat);
    url.searchParams.append("lon", long);
    url.searchParams.append("units", "imperial");
    url.searchParams.append("exclude", "minutely,alerts");

    fetch(url)
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((obj) => {
        console.log(obj);
        setWeather(obj);
      });
      return "success";
  };

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  const onLocationSearch = (e) => {
    e.preventDefault();
    getWeather(searchText).then(result => {
      if (result === "success"){
        setLocation(searchText);
        setHideAlert(true);
      }
      else{
        setHideAlert(false);
      }
    })
  };

  return (
    <div style={{ textAlign: "center" }}>
      {weather !== null && (
        <Dashboard
          weather={weather}
          location={location}
          searchText={searchText}
          hideAlert={hideAlert}
          onChange={onChange}
          onSubmit={onLocationSearch}
        ></Dashboard>
      )}
    </div>
  );
}

export default App;

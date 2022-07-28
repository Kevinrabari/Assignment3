import React, { useEffect, useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import { Dimmer, Loader } from "semantic-ui-react";

function Weather() {
  const REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5";
  const REACT_APP_API_KEY = "922a2b679f826961d0d4f68ad22f88f8";
  //const REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);
  return (
    <center>
      <div className="App">
        {typeof data.main != "undefined" ? (
          <WeatherDisplay weatherData={data} />
        ) : (
          <div>
            <Dimmer active>
              <Loader>Data of weather is Loading..</Loader>
            </Dimmer>
          </div>
        )}
      </div>
    </center>
  );
}

export default Weather;

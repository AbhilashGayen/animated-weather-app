import React from "react";

import "./weather-card.styles.css";
import SkyProps from "../sky-props/sky-props.component";
import Lighthouse from "../lighthouse/lighthouse.component";
import WeatherData from "../weather-data/weather-data.component";
import LoadingMessage from "../loading/loading.component";

const WeatherCard = (props) => {
  const { weatherData, statusCode, loading } = props;
  return (
    <div className="wrapper">
      <div className="container">
        <SkyProps weatherData={weatherData} statusCode={statusCode} />
        <LoadingMessage loading={loading} />
        <div className="top">
          <Lighthouse />
        </div>
        <div className="bottom">
              <WeatherData weatherData={weatherData} statusCode={statusCode} />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

import React from "react";
import "./weather-data.styles.css";

const WeatherData = (props) => {
  const { statusCode } = props;

  // Return different elements depending on request status code
  switch (statusCode) {
    case 200:
      const {
        temperature,
        minTemp,
        maxTemp,
        skyStatus,
        rainProbablity,
        location,
        humidity,
      } = props.weatherData;
      return (
        <div className="weaher-data-container">
          <div className="weather-data">
            <div className="box city-name">
              {location}
              <p className="rain-probablity">
                {rainProbablity} - {skyStatus}
              </p>
            </div>
            <div className="box temperature">
              {temperature}ºC<p className="temperature-text">TEMPERATURE</p>
            </div>
            <div className="box humidity">
              {humidity}%<p className="max-min-temp">HUMIDITY</p>
            </div>
            <div className="box min-temp">
              {minTemp}ºC<p className="max-min-temp">MIN TEMP</p>
            </div>
            <div className="box max-temp">
              {maxTemp}ºC<p className="max-min-temp">MAX TEMP</p>
            </div>
          </div>
        </div>
      );
    case 404:
      return <p className="box city-name">City not found</p>;
    case 503:
      return <section className="weather-values">Service unavailable</section>;
    default:
      return null;
  }
};

export default WeatherData;

import React, { Component, Fragment } from "react";
import "./App.css";
import CityInput from "./components/city-input/city-input.component";
import requestData from "./api/requestData";
import sanitizeWeatherData from "./utils/sanitize-weather-data";
import WeatherCard from "./components/weather-card/weather-card.component";
import initialData from "./utils/initial-data";

class App extends Component {
  state = {
    location: "Chennai",
    weatherData: initialData,
    loading: true,
    statusCode: 0,
  };

  componentDidMount() {
    const { loading } = this.state;

    // Set loading true while waiting for the request
    if (!loading) this.setState({ loading: true });

    // Request first load data
    this.handleLocationChange(this.state.location);
  }

  handleLocationChange = async (location) => {
    const data = await requestData(location);

    let statusCode = parseInt(data.cod);
    if (!statusCode) statusCode = 503;

    const weatherData = statusCode === 200 ? sanitizeWeatherData(data) : null;
    this.setState({location, weatherData, loading: false, statusCode });
  };

  render() {
    const { loading, weatherData, statusCode } = this.state;
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <CityInput handleLocationChange={this.handleLocationChange} />
          </header>
          <WeatherCard loadign={loading} weatherData={weatherData} statusCode={statusCode} />
        </div>
      </Fragment>
    );
  }
}

export default App;

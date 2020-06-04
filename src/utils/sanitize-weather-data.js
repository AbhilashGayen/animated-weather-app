// Sanitize API response
// Destructuring from data object

function sanitizeWeatherData({clouds, weather, main, name,}) {
// Extract location and humidity from data
const location = name;
const humidity = main.humidity;

// Set sky depending on clouds value
const skyStatus = setSkyStatus(clouds.all);

// Set rain value depending on forecast and skyStatus
const rainProbablity = setRainProbablity(weather[0].main, skyStatus);

// Convert temperature to celsius
const temperature = setTemperatureToCelsius(main.temp);
const minTemp = setTemperatureToCelsius(main.temp_min);
const maxTemp = setTemperatureToCelsius(main.temp_max);

// Return object containing ready to use values
return {location, humidity, skyStatus, rainProbablity, temperature, minTemp, maxTemp};

}

// Helper functions

// Default value for skyStatus
function setSkyStatus(clouds) {
    let skyStatus = 'clear';

  if (clouds >= 75) {
    skyStatus = 'Overcast';
  } else if (clouds >= 50) {
    skyStatus = 'Cloudy';
  } else if (clouds >= 25) {
    skyStatus = 'Partially cloudy';
  }

  return skyStatus;
}

function setRainProbablity(forecast, skyStatus) {
    return forecast === 'Rain' && skyStatus !== 'clear'
    ? 'rain: highly probable'
    : 'rain unlikely';
}

function setTemperatureToCelsius(temp){
  return Math.round(temp - 273.15);
}
export default sanitizeWeatherData;

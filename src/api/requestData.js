async function requestData(location) {
  const Api_Key = "429736441cf3572838aa10530929f7cd";

  try {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${Api_Key}`
    );
    const data = response.json();
    return data;
    
  } catch (error) {
    return { data: { cod: 503 } };
  }
}

export default requestData;

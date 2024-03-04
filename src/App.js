import React, { useState, useEffect } from 'react';
import WeatherQueryForm from './Components/WeatherQueryForm';
import WeatherDisplaySection from './Components/WeatherDisplaySection';
import axios from 'axios';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [errorText, setErrorText] = useState(null);

  const getGeolocation = async (location) => {

    const locationResponse = await axios.get(
      `https://nominatim.openstreetmap.org/search?format=json&q=${location}&limit=1`
    );
    if (locationResponse.data[0]) {
      // console.log(locationResponse.data[0]);
      const { lat, lon } = locationResponse.data[0];
      setLat(lat);
      setLon(lon);
      setErrorText('')
    }
    else {
      setErrorText('Invalid location! Please try again.');
      setWeatherData("")
    }
  };



  const getWeatherData = async (lat, lon) => {
    //collect temp, condition, wind speed, and forecast description

    try {
      await axios.get(`https://api.weather.gov/points/${lat},${lon}`)
        .then((data) => {
          const forecastUrl = data.data.properties.forecast

          axios.get(forecastUrl).then((res) => {

            const { detailedForecast, temperature, shortForecast, windSpeed } = res.data.properties.periods[0]
            setWeatherData({
              temperature,
              description: shortForecast,
              windSpeed,
              detailedForecast
            })
          })
        })
      setErrorText('')

    }
    catch (err) {

      setWeatherData("")
      setErrorText('Invalid location! Please try again.');
    }
    // console.log(weatherResponse.data.properties);
    //temperature, description, windSpeed, detailedForecast
  }
  useEffect(() => {
    // getGeolocation("Salt Lake City")
    if (lat && lon) {
      getWeatherData(lat, lon)
    }
  }, [lat, lon])
  return (
    <div>
      <h1>Weather App</h1>
      <WeatherQueryForm onSearch={getGeolocation} />
      {errorText && <p>{errorText}</p>}
      <WeatherDisplaySection weatherData={weatherData} />
    </div>
  );
};

export default App;

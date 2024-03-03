import React, { useState, useEffect } from 'react';
import WeatherQueryForm from './Components/WeatherQueryForm';
import WeatherDisplaySection from './Components/WeatherDisplaySection';
import axios from 'axios';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const getGeolocation = async (location) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${location}&limit=1`
      );
      console.log(response.data[0]);
      const { lat, lon } = response.data[0];
      setLat(lat);
      setLon(lon);
    } catch (error) {
      console.error('Error fetching geolocation:', error.message);
      throw new Error('Invalid location');
    }
  };
  console.log(lat, lon)


  // useEffect(() => {
  //   getGeolocation("Salt Lake City")
  // }, [])
  return (
    <div>
      <h1>Weather App</h1>
      <WeatherQueryForm onSearch={getGeolocation} />
      <WeatherDisplaySection weatherData={weatherData} />
    </div>
  );
};

export default App;

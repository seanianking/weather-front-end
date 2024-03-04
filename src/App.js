import React, { useState, useEffect } from 'react';
import WeatherQueryForm from './Components/WeatherQueryForm';
import WeatherDisplaySection from './Components/WeatherDisplaySection';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [errorText, setErrorText] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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
    <StyledContainer>
      <AppHeader variant="h2">Weather App</AppHeader>
      <WeatherQueryForm onSearch={getGeolocation} setSearchTerm={setSearchTerm} />
      {errorText && <ErrorMessage variant='h4'>{errorText}</ErrorMessage>}
      <WeatherDisplaySection weatherData={weatherData} searchTerm={searchTerm} />
    </StyledContainer>
  );
};

export default App;

const StyledContainer = styled(Container)`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  wrap: wrap;
`

const ErrorMessage = styled(Typography)`
color: red;
margin: 30px 0 !important;
`

const AppHeader = styled(Typography)`
text-align: center;
`
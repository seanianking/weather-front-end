import React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const WeatherDisplaySection = ({ weatherData, searchTerm }) => {
    if (!weatherData) return null;

    const { temperature, description, windSpeed, detailedForecast } = weatherData;

    return (
        <StyledBox>
            <h2>Current Weather Conditions in {searchTerm}</h2>
            <p>Temperature: {temperature}°F</p>
            <p>Description: {description}</p>
            <p>Wind Speed: {windSpeed}</p>
            <p>Detailed Forecast: {detailedForecast}</p>
        </StyledBox>
    );
};

export default WeatherDisplaySection;

const StyledBox = styled(Box)`
margin-top:50px;
  display: flex;
  flex-direction: column;
  background-color: #6082b6;
  border: 5px solid #293c59;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
  `
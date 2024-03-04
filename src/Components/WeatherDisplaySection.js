import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

const WeatherDisplaySection = ({ weatherData, searchTerm }) => {
  if (!weatherData) return null;

  const { temperature, description, windSpeed, detailedForecast } = weatherData;

  return (
    <StyledBox>
      <Typography variant="h4">Current Weather Conditions in {searchTerm}</Typography>
      <WeatherText><strong>Temperature:</strong> {temperature}°F</WeatherText>
      <WeatherText><strong>Description:</strong> {description}</WeatherText>
      <WeatherText><strong>Wind Speed: </strong>{windSpeed}</WeatherText>
      <WeatherText><strong>Detailed Forecast:</strong> {detailedForecast}</WeatherText>
    </StyledBox>
  );
};

export default WeatherDisplaySection;

const StyledBox = styled(Box)`
  margin:50px 0;
  display: flex;
  flex-direction: column;
  background-color: #6082b6;
  border: 5px solid #293c59;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  `
const WeatherText = styled(Typography)`
max-width:50%;
font-size: 24px;
margin: 10px 0 !important;
`
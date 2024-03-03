import React from 'react';

const WeatherDisplaySection = ({ weatherData }) => {
    if (!weatherData) return null;

    const { temperature, description, windSpeed, detailedForecast } = weatherData;

    return (
        <div>
            <h2>Weather Conditions</h2>
            <p>Temperature: {temperature}°F</p>
            <p>Description: {description}</p>
            <p>Wind Speed: {windSpeed} mph</p>
            <p>Detailed Forecast: {detailedForecast}</p>
        </div>
    );
};

export default WeatherDisplaySection;

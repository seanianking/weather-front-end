import React, { useState } from 'react';

const WeatherQueryForm = ({ onSearch }) => {
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        onSearch(location);
    };

    return (
        <div>
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default WeatherQueryForm;

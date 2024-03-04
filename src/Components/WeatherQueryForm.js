import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import styled from 'styled-components';

const WeatherQueryForm = ({ onSearch, setSearchTerm }) => {
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        onSearch(location);
        setSearchTerm(location);
        setLocation('');
    };

    return (
        <StyledContainer
            component="form"
        >
            <StyledTextField
                type="text"
                variant='filled'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location..."
            />
            <StyledButton variant='contained' onClick={handleSearch}>Search</StyledButton>
        </StyledContainer>
    );
};

export default WeatherQueryForm;

const StyledContainer = styled(Box)`
display: flex;
align-items: center;
justify-content: space-between;
width: 75%;
`
const StyledTextField = styled(TextField)`
width:80%;
background-color: #6082b6;
border: 3px solid #293c59;
border-radius: 10px;
`

const StyledButton = styled(Button)`
background-color: #6082b6;
border: 1px solid #293c59;
border-radius: 10px;
color:black;
`
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
        <StyledBox
            component="form"
        >
            <StyledTextField
                type="text"
                variant='filled'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location..."
            />
            <StyledButton variant='contained' size='large' onClick={handleSearch}>Search</StyledButton>
        </StyledBox>
    );
};

export default WeatherQueryForm;

const StyledBox = styled(Box)`
display: flex;
align-items: center;
justify-content: space-between;
width: 84%;
margin-top: 20px`

const StyledTextField = styled(TextField)`
width:80% !important;
background-color: #6082b6 !important;
border: 3px solid #293c59 !important;
border-radius: 10px !important;
`

const StyledButton = styled(Button)`
background-color: #6082b6 !important;
border: 1px solid #293c59 !important;
border-radius: 10px !important;
color:black !important;
`
/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

const Weather = ({ weatherData }) => {
  return (
    <Box className="weather">
      <Box className="weather-info-container">
        <Box className="weather-icon-container">
          <img
            src={weatherData.current.condition.icon}
            alt="weather image"
            loading="lazy"
          />
        </Box>
        <Typography variant="h4">
          {weatherData.current.condition.text}
        </Typography>
      </Box>
      <Typography className="weather-temperature" variant="h1">
        {weatherData.current.temp_c}
      </Typography>
    </Box>
  );
};

export default Weather;

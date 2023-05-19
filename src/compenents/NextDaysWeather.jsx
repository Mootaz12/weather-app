/* eslint-disable react/prop-types */
import { Box, Typography, Card, CardContent } from "@mui/material";

const NextDaysWeather = ({ weatherData }) => {
  const { wind_kph, wind_dir, pressure_mb, humidity } = weatherData.current;

  return (
    <Box className="next-days-weather">
      <Card className="card">
        <CardContent>
          <Typography variant="h5">Wind</Typography>
          <Typography variant="h6">Speed: {wind_kph} km/h</Typography>
          <Typography variant="h6">Direction: {wind_dir}</Typography>
        </CardContent>
      </Card>
      <Card className="card">
        <CardContent>
          <Typography variant="h5">Pressure</Typography>
          <Typography variant="h6">{pressure_mb} mb</Typography>
        </CardContent>
      </Card>
      <Card className="card">
        <CardContent>
          <Typography variant="h5">Humidity</Typography>
          <Typography variant="h6">{humidity}%</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NextDaysWeather;

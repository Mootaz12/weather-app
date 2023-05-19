/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

export default function Location({ weatherData }) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDayName = daysOfWeek[new Date().getDay()];
  const [currentDate, currentTime] = weatherData.location.localtime.split(" ");

  return (
    <Box className="location">
      <Typography variant="h2">{weatherData.location.name}</Typography>
      <Box className="date-time-container">
        <Typography variant="h4">{currentDayName}</Typography>
        <Typography variant="h4">{currentDate}</Typography>
      </Box>
      <Typography variant="h3">{currentTime}</Typography>
    </Box>
  );
}

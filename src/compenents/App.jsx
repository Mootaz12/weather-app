import { Grid, Box, CircularProgress } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import Location from "./Location";
import Weather from "./Weather";
import NextDaysWeather from "./NextDaysWeather";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              try {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const apiKey = import.meta.env.VITE_API_KEY;
                const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`;

                const response = await axios.get(url);
                const data = response.data;
                setWeatherData(data);
              } catch (error) {
                console.error("Error fetching weather data:", error);
              }
            },
            (error) => {
              console.error(`Error retrieving location: ${error}`);
            }
          );
        }
      } catch (error) {
        console.error("Error retrieving location:", error);
      }
    };

    fetchWeatherData();
  }, []);

  if (!weatherData) {
    // Data is not ready yet, show loading indicator
    return (
      <Box className="app">
        <Box className="loading-container">
          <CircularProgress />
        </Box>
      </Box>
    );
  }

  return (
    <Box className="app">
      <Grid container display="flex" flexDirection="column">
        <Grid item>
          <Location weatherData={weatherData} />
        </Grid>
        <Grid item>
          <Weather weatherData={weatherData} />
        </Grid>
        <Grid item>
          <NextDaysWeather weatherData={weatherData} />
        </Grid>
      </Grid>
    </Box>
  );
}

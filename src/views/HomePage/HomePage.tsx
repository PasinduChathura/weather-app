import React, { useEffect, useState } from 'react';
import CustomCard from '../../components/Card/CustomCard';
import Grid from '@mui/material/Grid';
import { getWeatherData } from '../../services/Weather/WeatherService';
import cityCodes from '../../assets/cities.json';
import classes from './HomePage.module.css';
import { Router, useHistory } from 'react-router-dom';
import { LuBath } from 'react-icons/lu';

function HomePage() {
  const [weatherData, setWeatherData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // get cache data from local storage
    const cachedData = localStorage.getItem('weather-data');
    if (cachedData) {
      const { timestamp, data } = JSON.parse(cachedData);
      const now = Date.now();
      const cacheDuration = 5 * 60 * 1000;

      if (now - timestamp < cacheDuration) {
        setWeatherData(data);
        return;
      }
    }
    // get weather data from api
    getWeatherDataHandler();
  }, []);

  const getCityCodes = () => {
    const cityCodesList = cityCodes.List.map((city) => city.CityCode);
    return cityCodesList.join(',');
  };

  const getWeatherDataHandler = async () => {
    const cityCodesStr = getCityCodes();
    const response: any = await getWeatherData(cityCodesStr);
    if (response) {
      setWeatherData(response?.list);
      const cacheData = {
        timestamp: Date.now(),
        data: response?.list,
      };
      localStorage.setItem('weather-data', JSON.stringify(cacheData));
    }
  };

  // get a random color
  const generateRandomColor = () => {
    const minLightness = 40;
    const maxLightness = 60;

    const randomHue = Math.floor(Math.random() * 360);
    const randomSaturation = Math.floor(Math.random() * 50) + 50;

    const randomLightness =
      Math.floor(Math.random() * (maxLightness - minLightness + 1)) +
      minLightness;

    const randomColor = `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`;
    return randomColor;
  };

  const cardClickHandler = (cityCode: any, color: String) => {
    history.push('/weather', {
      color: color,
      cityCode: cityCode,
    });
  };

  return (
    <div className={classes['homepage-container']}>
      {weatherData && weatherData.length > 0 && (
        <Grid container spacing={5}>
          {weatherData.map((weather: any, index) => {
            const color = generateRandomColor();
            return (
              <Grid item lg={6} md={6} sm={12} xs={12} key={index}>
                <div onClick={() => cardClickHandler(weather.id, color)}>
                  <CustomCard weather={weather} color={color} />
                </div>
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
}

export default HomePage;

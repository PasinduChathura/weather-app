import React, { useEffect, useState } from 'react';
import classes from './WeatherPage.module.css';
import CustomCard from '../../../components/Card/CustomCard';
import { useHistory } from 'react-router-dom';
import { getWeatherData } from '../../../services/Weather/WeatherService';

type Props = {};

const WeatherPage: React.FC<Props> = (props) => {
  const history = useHistory();
  const [weatherData, setWeatherData] = useState<any>();
  const state: any = history.location.state;

  useEffect(() => {
    getWeatherDataHandler();
  }, []);

  const getWeatherDataHandler = async () => {
    const response: any = await getWeatherData(state?.cityCode);
    if (response) {
      const data = response?.list[0];
      if (data) {
        setWeatherData(data);
      }
    }
  };

  return (
    <div className={classes['weather-page-container']}>
      <div className={classes['weather-page-card']}>
        <CustomCard color={state?.color} weather={weatherData}></CustomCard>
      </div>
    </div>
  );
};

export default WeatherPage;

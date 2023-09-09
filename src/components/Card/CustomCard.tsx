import React, { CSSProperties } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import moment from 'moment';
import _ from 'lodash';
import { LuNavigation } from 'react-icons/lu';
import classes from './CustomCard.module.css';

type Props = { weather: any; color: String };

const CustomCard: React.FC<Props> = (props) => {
  const { weather, color } = props;

  return (
    <Card sx={{ width: '100%', borderRadius: '1rem' }}>
      {/* card top content with background image */}
      <div
        className={classes['card-top']}
        style={{ '--bg-color': color } as CSSProperties}
      >
        <span className={classes['card-content-top']}>
          <span className={classes['card-top-sub-section']}>
            <div className={classes['card-top-sub-section-item']}>
              <span className={classes['card-top-content-item-text3']}>
                {weather?.name}
              </span>
              <span className={classes['card-top-content-item-text1']}>
                {moment(weather?.dt).format('h:mm A, MMMM DD')}
              </span>
            </div>
            <div className={classes['card-top-sub-section-item']}>
              <span
                className={classes['card-top-content-item']}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                <img
                  src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`}
                  alt={weather?.weather[0]?.icon}
                  className={classes['card-top-content-item-icon']}
                />
                <span className={classes['card-top-content-item-text2']}>
                  {_.startCase(weather?.weather[0]?.description)}
                </span>
              </span>
            </div>
          </span>
          <span className={classes['card-top-sub-section']}>
            <div className={classes['card-top-sub-section-item']}>
              <span className={classes['card-top-content-item-text4']}>
                {Math.round(weather?.main?.temp)}&#176;c
              </span>
            </div>
            <div className={classes['card-top-sub-section-item']}>
              <span className={classes['card-top-content-item-text1']}>
                Temp Min: &nbsp;{Math.round(weather?.main?.temp_min)}&#176;c
              </span>
              <span className={classes['card-top-content-item-text1']}>
                Temp Max: &nbsp;{Math.round(weather?.main?.temp_max)}&#176;c
              </span>
            </div>
          </span>
        </span>
      </div>
      {/* card bottom content with background image */}
      <CardContent style={{ backgroundColor: '#383b47' }}>
        <span className={classes['card-content-bottom']}>
          <span
            className={
              classes['card-top-sub-section-item'] +
              ' ' +
              classes['left'] +
              ' ' +
              classes['padding-left-right']
            }
          >
            <span className={classes['card-bottom-text-wrapper']}>
              <span className={classes['card-bottom-text']}>
                Pressure: &nbsp;
              </span>
              <span className={classes['card-bottom-subtext']}>
                {weather?.main?.pressure}hpa
              </span>
            </span>
            <span className={classes['card-bottom-text-wrapper']}>
              <span className={classes['card-bottom-text']}>
                Humidity: &nbsp;
              </span>
              <span className={classes['card-bottom-subtext']}>
                {weather?.main?.humidity}%
              </span>
            </span>
            <span className={classes['card-bottom-text-wrapper']}>
              <span className={classes['card-bottom-text']}>
                Visibility: &nbsp;
              </span>
              <span className={classes['card-bottom-subtext']}>
                {weather?.visibility}
              </span>
            </span>
          </span>
          <div className={classes['card-bottom-content-divider']}></div>
          <span
            className={classes['card-top-sub-section-item']}
            style={{ padding: '0 1rem' }}
          >
            <span className={classes['card-bottom-subtext']}>
              <LuNavigation size={20} />
            </span>
            <span className={classes['card-bottom-subtext']}>
              {weather?.wind?.speed}m/s {weather?.wind?.deg} Degree
            </span>
          </span>
          <div className={classes['card-bottom-content-divider']}></div>
          <span
            className={
              classes['card-top-sub-section-item'] +
              ' ' +
              classes['right'] +
              ' ' +
              classes['padding-left-right']
            }
          >
            <span className={classes['card-bottom-text-wrapper']}>
              <span className={classes['card-bottom-text']}>
                Sunrise: &nbsp;
              </span>
              <span className={classes['card-bottom-subtext']}>
                {moment(weather?.sys?.sunrise).format('h:mm A')}
              </span>
            </span>
            <span className={classes['card-bottom-text-wrapper']}>
              <span className={classes['card-bottom-text']}>
                Sunset: &nbsp;
              </span>
              <span className={classes['card-bottom-subtext']}>
                {moment(weather?.sys?.sunset).format('h:mm A')}
              </span>
            </span>
          </span>
        </span>
      </CardContent>
    </Card>
  );
};

export default CustomCard;

import React from 'react';
import get from 'lodash/get';
import moment from 'moment';
import useSWR from 'swr';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// components
import { WeatherForcast } from './WeatherForcast';

// api
import {
  WEATHER_STACK_API,
  WEATHER_STACK_API_KEY,
  WEATHER_UNITS,
} from '../../config';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
  },
  weatherIcon: {
    marginLeft: 10,
    width: 60,
    height: 60,
  },
});

export function WeatherCard({ latlng, unit }) {
  const classes = useStyles();

  const { data, error } = useSWR(
    `${WEATHER_STACK_API}/onecall?lat=${latlng.lat}&lon=${latlng.lng}&appid=${WEATHER_STACK_API_KEY}&units=${unit}`
  );

  if (!data) return null;

  if (error) return `Error: ${error.message}`;

  const localTime = get(data, ['current', 'dt']) * 1000;

  const forcastData = get(data, 'daily', []);

  const currentWeather = get(data, ['current', 'weather', '0'], {});

  const currentTemp = get(data, ['current', 'temp'], 0);

  const icon = get(currentWeather, 'icon', '');

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {get(data, ['location', 'name'], '')}
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography variant="h6" color="textSecondary">
              {currentTemp} {WEATHER_UNITS[unit]}
            </Typography>
            {icon && (
              <img
                className={classes.weatherIcon}
                alt="weather_icon"
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              />
            )}
          </Box>
          <Typography className={classes.subText} color="textSecondary">
            {moment(localTime).format('LLL')}
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <WeatherForcast unit={unit} forcastData={forcastData} />
        </CardContent>
      </Card>
    </>
  );
}

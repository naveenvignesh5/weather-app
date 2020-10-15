import React from 'react';
import get from 'lodash/get';
import moment from 'moment';
import useSWR from 'swr';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';

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
    width: 100,
    height: 100,
  },
  desc: {
    textTransform: 'capitalize',
    fontSize: 20,
  },
});

export function WeatherCard({ latlng, unit }) {
  const classes = useStyles();

  const { data, error } = useSWR(
    `${WEATHER_STACK_API}/weather?lat=${latlng.lat}&lon=${latlng.lng}&appid=${WEATHER_STACK_API_KEY}&units=${unit}`
  );

  if (!data) return null;

  if (error) return `Error: ${error.message}`;

  const localTime = get(data, 'dt') * 1000;

  const locationName = get(data, 'name');

  const currentWeather = get(data, ['weather', '0'], {});
  const desc = get(currentWeather, 'description', '');

  const currentTemp = get(data, ['main', 'temp'], 0);
  const humidity = get(data, ['main', 'humidity'], 0);
  const pressure = get(data, ['main', 'pressure'], 0);

  const icon = get(currentWeather, 'icon', '');

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={2} xl={2}>
              <Typography variant="h5" component="h2">
                {locationName}
              </Typography>
              {icon && (
                <img
                  className={classes.weatherIcon}
                  alt="weather_icon"
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                />
              )}
              <Typography
                classes={{ root: classes.subText }}
                color="textSecondary"
              >
                {moment(localTime).format('LLL')}
              </Typography>
              <Typography classes={{ root: classes.desc }} variant="subtitle2">
                {desc}
              </Typography>
            </Grid>
            <Grid item xs xl>
              <Typography variant="h6">Temperature</Typography>
              <Typography
                gutterBottom
                variant="subtitle1"
                color="textSecondary"
              >
                {currentTemp} {WEATHER_UNITS[unit]}
              </Typography>
              <Typography variant="h6">Humidity</Typography>
              <Typography
                gutterBottom
                variant="subtitle1"
                color="textSecondary"
              >
                {humidity} %
              </Typography>
              <Typography variant="h6">Pressure</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {pressure} hPa
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <WeatherForcast unit={unit} latlng={latlng} />
        </CardContent>
      </Card>
    </>
  );
}

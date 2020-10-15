import React from 'react';
import get from 'lodash/get';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { WEATHER_UNITS } from '../../../config';

const useStyles = makeStyles({
  desc: {
    textTransform: 'capitalize',
  },
  temp: {
    fontSize: 12,
    fontWeight: 700,
  },
});

export function WeatherForcast({ forcastData, unit = 'standard' }) {
  const classes = useStyles();

  return (
    <Grid container>
      {forcastData.map(function (data, index) {
        const dt = get(data, 'dt') * 1000;
        const weatherData = get(data, ['weather', '0'], {});
        const desc = get(weatherData, 'description', '');
        const icon = get(weatherData, 'icon', '');

        const minTemp = get(data, ['temp', 'min'], 0);
        const maxTemp = get(data, ['temp', 'max'], 0);

        return (
          <Grid
            container
            item
            xs
            xl
            key={`forcast-${get(data, 'dt')}-${index}`}
            direction="column"
            alignItems="center"
          >
            <Typography variant="h5">{moment(dt).format('dddd')}</Typography>
            <img
              alt={desc}
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            />
            <Typography classes={{ root: classes.desc }} color="textSecondary">
              {desc}
            </Typography>
            <Box display="flex" mt={2}>
              <Typography classes={{ root: classes.temp }} variant="p">
                {maxTemp} {WEATHER_UNITS[unit]}
              </Typography>
              <Divider orientation="vertical" flexItem variant="middle" />
              <Typography classes={{ root: classes.temp }} variant="p">
                {minTemp} {WEATHER_UNITS[unit]}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

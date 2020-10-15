import React from 'react';
import get from 'lodash/get';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  desc: {
    textTransform: 'capitalize',
  },
});

export function WeatherForcast({ forcastData }) {
  const classes = useStyles();

  return (
    <Grid container>
      {forcastData.map(function (data, index) {
        const dt = get(data, 'dt') * 1000;
        const desc = get(data, ['weather', '0', 'description'], '');
        const icon = get(data, ['weather', '0', 'icon'], '');

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
          </Grid>
        );
      })}
    </Grid>
  );
}

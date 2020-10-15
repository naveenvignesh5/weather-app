import React, { useEffect, useState } from 'react';

import Box from '@material-ui/core/Box';

// components
import { AppBar, SnackBar, WeatherCard } from '../../components';

// utils
import { getLocation } from '../../utils';

export function Home() {
  const [latlng, setLalLng] = useState({ lat: 40.7128, lng: 74.006 });
  const [error, setError] = useState('');

  const open = Boolean(error);

  useEffect(() => {
    getLocation(function (err, data) {
      if (err) {
        setError(err.message);
        return;
      }

      setLalLng({
        lat: data.coords.latitude,
        lng: data.coords.longitude,
      });
    });
  }, []);

  return (
    <>
      <AppBar />
      <Box p={3}>
        <WeatherCard latlng={latlng} />
      </Box>
      <SnackBar
        open={open}
        message={error}
        type="error"
        handleClose={() => setError('')}
      />
    </>
  );
}

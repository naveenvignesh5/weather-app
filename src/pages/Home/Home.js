import React, { useEffect, useState } from 'react';

import Box from '@material-ui/core/Box';

// components
import { AppBar, SnackBar, WeatherCard } from '../../components';

// utils
import { getLocation } from '../../utils';

export function Home() {
  const [latlng, setLalLng] = useState({ lat: 40.7128, lng: 74.006 });
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('standard');

  const open = Boolean(error);

  useEffect(() => {
    getLocation(function (err, data) {
      if (err) {
        console.log(err);
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
      <AppBar unit={unit} handleUnitChange={(e) => setUnit(e.target.value)} />
      <Box p={3}>
        <WeatherCard unit={unit} latlng={latlng} />
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

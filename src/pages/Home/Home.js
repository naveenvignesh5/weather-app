import React, { useState } from 'react';

import Box from '@material-ui/core/Box';

// components
import { AppBar, WeatherCard } from '../../components';

export function Home() {
  const [latlng, setLalLng] = useState({ lat: 13.0827, lng: 80.2707 });

  return (
    <>
      <AppBar />
      <Box p={3}>
        <WeatherCard latlng={latlng} />
      </Box>
    </>
  );
}

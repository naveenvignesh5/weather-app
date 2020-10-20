import React, { useState } from 'react';

import useSWR from 'swr';

import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import get from 'lodash/get';

// config
import { MAPBOX_API, MAPBOX_ACCESS_TOKEN } from '../../config';

const useStyles = makeStyles((theme) => ({
  textFieldRoot: {
    backgroundColor: theme.palette.common.white,
    borderRadius: 4,
  },
}));

export function LocationSearch({ handleLocationChange }) {
  const classes = useStyles();

  const [query, setQuery] = useState('');

  const { data } = useSWR(
    `${MAPBOX_API}/geocoding/v5/mapbox.places/${query}.json?access_token=${MAPBOX_ACCESS_TOKEN}`
  );

  return (
    <Autocomplete
      freeSolo
      onChange={(e, v) => handleLocationChange(v)}
      options={get(data, ['features'], [])}
      getOptionLabel={(option) => option.place_name}
      style={{ width: 500 }}
      loading={!data}
      renderInput={(params) => (
        <TextField
          {...params}
          margin="normal"
          variant="outlined"
          classes={{ root: classes.textFieldRoot }}
          placeholder="Enter location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      )}
    />
  );
}

LocationSearch.defaultProps = {
  handleLocationChange: () => {},
};

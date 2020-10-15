import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function AppBar() {
  const classes = useStyles();

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Weather App
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}

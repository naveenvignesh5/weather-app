import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    backgroundColor: '#fff',
  },
}));

export function AppBar({ unit, handleUnitChange }) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <MuiAppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Weather App
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Location"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Typography className={classes.title} variant="subtitle1" noWrap>
            Unit
          </Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              id="demo-simple-select-outlined"
              defaultValue="standard"
              value={unit}
              onChange={handleUnitChange}
              classes={{
                root: classes.select,
                outlined: classes.select,
              }}
            >
              <MenuItem value="standard">Standard</MenuItem>
              <MenuItem value="metric">Metric</MenuItem>
              <MenuItem value="imperial">Imperial</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.grow} />
        </Toolbar>
      </MuiAppBar>
    </div>
  );
}

import React, { lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
// import Population from './Population';
// import CardGnomeContainer from '../container/CardGnomeContainer';
//import CardGnomeContainer from '../components/CardContainer';
// import { gnomeItem1 } from '../utils/data';
import FilterGnomes from './FilterGnomes';
import { BrowserRouter, Route } from 'react-router-dom';
import FetchPopulation from '../container/FetchPopulation';

const CardGnomeContainer = lazy(() => import('../components/CardContainer'));

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Header />
        <Grid container spacing={3}>
          <Grid item lg={12} xs={12}>
            <Paper className={classes.paper}>
              <FilterGnomes />
            </Paper>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Paper className={classes.paper}>
              <FetchPopulation />
            </Paper>
          </Grid>
          <Grid item lg={8} xs={12}>
            <Route
              path={`/gnome/:id`}
              render={() => {
                return (
                  <Suspense fallback={<div>Loading...</div>}>
                    <CardGnomeContainer />
                  </Suspense>
                );
              }}
              exact
            />
          </Grid>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

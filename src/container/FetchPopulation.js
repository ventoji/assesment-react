import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPopulation } from '../reducer/actions';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { Link } from 'react-router-dom';
import { setCurrentGnome } from '../reducer/actions';

import {
  getPopulation,
  getPopulationPending,
  getPopulationError
} from '../reducer/selectors';
import { gnomes } from '../utils/data';

export class FetchGnomes extends Component {
  componentDidMount() {
    // this.props.fetchPopulationBegin();
    this.props.fetchPopulation();
  }

  componentDidUpdate(prevProps) {
    console.log('prevProps', prevProps);
    /*   if (prevProps.gnomes.length !== this.props.gnomes.length) {
      console.log('should re-render');
    } */
  }

  render() {
    return (
      <List>
        {gnomes.map((item, index) => (
          <ListItem
            key={index}
            component={Link}
            to={`/gnome/${item.id}`}
            onClick={() => {
              this.props.setCurrentGnome(item);
            }}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    );
  }
}

const mapStateToProps = (state) => ({
  gnomes: getPopulation(state),
  pending: getPopulationPending(state),
  error: getPopulationError(state)
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setCurrentGnome,
      fetchPopulation
    },
    dispatch
  );

/* const mapDispatchToProps = dispatch => {
  return {
    fetchPopulation: () => {
      dispatch(fetchPopulation());
    }
  };
}; */

/* const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPopulation,
      fetchPopulationBegin
    },
    dispatch
  ); */

const FetchPopulation = connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchGnomes);

export default FetchPopulation;

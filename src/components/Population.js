import React, { useState, useEffect } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrentGnome } from '../reducer/actions';

import { gnomes } from '../utils/data';

export const PopulationContainer = ({ setCurrentGnome }) => {
  const [gnomes1, setGnomes] = useState([]);
  /*const [items, setItems] = useState([
    { name: 'First User' },
    { name: 'Second User' },
    { name: 'Third User' }
  ]);*/

  useEffect(() => {
    // console.log(gnomes1);
    setGnomes([...gnomes]);
  }, []);

  return (
    <List>
      {gnomes1.map((item, index) => (
        <ListItem
          key={index}
          component={Link}
          to={`/gnome/${item.id}`}
          onClick={() => {
            setCurrentGnome(item);
          }}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = state => ({
  gnome: state.gnome
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setCurrentGnome }, dispatch);

const Population = connect(
  mapStateToProps,
  mapDispatchToProps
)(PopulationContainer);

export default Population;

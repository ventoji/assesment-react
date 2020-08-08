import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardGnome from './CardGnome';

export class CardContainer extends Component {
  componentDidUpdate(prevProps) {
    console.log('prevProps', prevProps);
    if (prevProps.gnome.id !== this.props.gnome.id) {
      console.log('should re-render');
    }
  }

  render() {
    return <CardGnome gnome={this.props.gnome} />;
  }
}

const mapStateToProps = state => ({
  gnome: state.gnome
});

const CardGnomeContainer = connect(mapStateToProps)(CardContainer);

export default CardGnomeContainer;

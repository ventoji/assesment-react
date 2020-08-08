import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { setCurrentGnome } from '../reducer/actions';
import CardGnome from '../components/CardGnome';

const mapStateToProps = state => ({
  gnome: state.gnome
});

const CardGnomeContainer = connect(mapStateToProps)(CardGnome);

export default CardGnomeContainer;

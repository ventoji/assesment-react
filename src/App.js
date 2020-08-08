import React from 'react';
import { Provider } from 'react-redux';
import './styles.css';
import Home from './components/Home';
import store from './reducer/store';
//import { fetchPopulation } from '../reducer/actions';

// import { saveState } from './utils/localStorage';

//const state = store.getState();
//console.log('initial state', state);

// store.dispatch(fetchPopulation());
store.subscribe(() => {
  console.log(store.getState());
  // saveState(store.getState());
});
export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

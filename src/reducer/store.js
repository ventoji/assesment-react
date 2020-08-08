import { rootReducer } from './reducer';
// import middleware from './middleware'
import thunk from 'redux-thunk';
// import { createPromise } from 'redux-promise-middleware';
import { createStore, applyMiddleware, compose } from 'redux';

// const promise = createPromise({ types: { fulfilled: 'success' } });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let logger = store => next => action => {
  console.group('dispatching:', action.type);
  let result = next(action);
  console.log('next state:', store.getState());
  console.groupEnd();
  return result;
};

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;

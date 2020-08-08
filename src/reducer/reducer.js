import {
  SET_CURRENT_GNOME,
  FETCH_POPULATION_PENDING,
  FETCH_POPULATION_FULFILLED,
  FETCH_POPULATION_REJECTED
} from './actions';
import { combineReducers } from 'redux';

const initialState = {};

export const gnomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_GNOME:
      //  console.log(action);
      return action.payload;
    default:
      return state;
  }
};

const initialStateFetchData = {
  pending: false,
  gnomes: [],
  error: null
};

export const fetchPopulationReducer = (
  state = initialStateFetchData,
  action
) => {
  switch (action.type) {
    case FETCH_POPULATION_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_POPULATION_FULFILLED:
      return {
        ...state,
        pending: false,
        gnomes: action.payload
      };
    case FETCH_POPULATION_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  gnome: gnomeReducer,
  gnomes: fetchPopulationReducer
});

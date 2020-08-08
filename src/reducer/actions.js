import axios from 'axios';
export const FETCH_POPULATION = 'FETCH_POPULATION';
export const FETCH_POPULATION_PENDING = 'FETCH_POPULATION_PENDING';
export const FETCH_POPULATION_FULFILLED = 'FETCH_POPULATION_FULFILLED';
export const FETCH_POPULATION_REJECTED = 'FETCH_POPULATION_REJECTED';
export const SET_CURRENT_GNOME = 'SET_CURRENT_GNOME';

export const setCurrentGnome = gnome => {
  // console.log(gnome);
  return {
    type: SET_CURRENT_GNOME,
    payload: gnome
  };
};

export const fetchPopulationBegin = () => ({
  type: FETCH_POPULATION_PENDING
});

export const fetchPopulationSuccess = population => ({
  type: FETCH_POPULATION_FULFILLED,
  payload: population
});

export const fetchPopulationFailure = error => ({
  type: FETCH_POPULATION_REJECTED,
  payload: { error }
});

export const fetchPopulation = () => dispatch => {
  dispatch({ type: FETCH_POPULATION_PENDING });
  axios(
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
  )
    .then(res => {
      console.log('data', res.data);
      return dispatch(fetchPopulationSuccess(res.data.Brastlewark));
    })
    .catch(e => {
      console.log(e);
      return dispatch(fetchPopulationFailure(e));
    });
};

/*export const fetchPopulation = () => ({
  type: FETCH_POPULATION,
  payload: axios.get(
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
  ) 
  /*     .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      console.log('entra', res.data);
      fetchPopulationSuccess(res.data);
      return res.data;
    })
    .catch(error => {
      fetchPopulationFailure(error);
    }) */
/*});*/

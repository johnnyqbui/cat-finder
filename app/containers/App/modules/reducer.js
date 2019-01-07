/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { List, fromJS } from 'immutable';

import {
  FETCH_CAT_BREEDS,
  FETCH_CAT_BREEDS_SUCCESS,
  FETCH_CAT_BREEDS_FAIL
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  catBreeds: List()
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAT_BREEDS:
      return state
        .set('loading', true)
        .set('error', false)

    case FETCH_CAT_BREEDS_SUCCESS:
      return state
        .set('catBreeds', List(action.catBreeds.petfinder.breeds.breed))
        .set('loading', false)

    case FETCH_CAT_BREEDS_FAIL:
      return state
        .set('error', action.error)
        .set('loading', false);

    default:
      return state;
  }
}

export default appReducer;
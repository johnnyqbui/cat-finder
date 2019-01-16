/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  FETCH_CAT_BREED_IMAGE_REQUEST,
  FETCH_CAT_BREED_IMAGE_SUCCESS,
  FETCH_CAT_BREED_IMAGE_FAIL
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  imageURL: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAT_BREED_IMAGE_REQUEST:
      return state.set('imageURL', '');
    case FETCH_CAT_BREED_IMAGE_SUCCESS:
      return state.set('imageURL', action.data[0].url);
    case FETCH_CAT_BREED_IMAGE_FAIL:
      return state.set('imageURL', action.error);
    default:
      return state;
  }
}

export default homeReducer;
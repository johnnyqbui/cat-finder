/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  FETCH_CAT_BREEDS,
  FETCH_CAT_BREEDS_SUCCESS,
  FETCH_CAT_BREEDS_FAIL
} from './constants';

/**
 * Fetch cats, this action starts the request saga
 *
 * @return {object} An action object with a type
 */
export function fetchCatBreeds() {
  return {
    type: FETCH_CAT_BREEDS,
  };
}

/**
 * Dispatched when cat info has been fetched by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object} An action object with a type
 */
export function fetchCatBreedsSuccess(catBreeds) {
  return {
    type: FETCH_CAT_BREEDS_SUCCESS,
    catBreeds,
  };
}

/**
 * Dispatched when fetching has failed
 *
 * @param  {object} error The error
 *
 * @return {object}An action object with a type
 */

export function fetchCatBreedsFailed(error) {
  return {
    type: FETCH_CAT_BREEDS_FAIL,
    error,
  };
}
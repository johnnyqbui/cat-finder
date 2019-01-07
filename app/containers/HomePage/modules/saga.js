/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_CAT_BREEDS } from 'containers/App/modules/constants';
import { fetchCatBreedsSuccess, fetchCatBreedsFailed } from 'containers/App/modules/actions';

import request from 'utils/request';
import fetchJsonp from 'fetch-jsonp';

const METHOD = 'breed.list'
const BASE_URL = `https://api.petfinder.com/${METHOD}?format=json&animal=cat`

export function* getCatBreeds() {
  const requestURL = `${BASE_URL}&key=${process.env.PETFINDER_API_KEY}`;

  try {
    const response = yield fetchJsonp(requestURL)
      .then(response => response.json())
      .then(json => json)

    yield put(fetchCatBreedsSuccess(response))

  } catch (err) {
    yield put(fetchCatBreedsFailed(err));
  }
}


/**
 * Root saga manages watcher lifecycle
 */
export default function* watcherCatBreeds() {
  // Watches for FETCH_CAT_BREEDS actions and calls getCatBreeds when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(FETCH_CAT_BREEDS, getCatBreeds);
}
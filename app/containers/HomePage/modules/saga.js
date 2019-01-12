/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_CAT_BREEDS_REQUEST } from 'containers/App/modules/constants';
import { FETCH_CAT_BREED_IMAGE_REQUEST } from './constants';

import { fetchCatBreedsSuccess, fetchCatBreedsFailed } from 'containers/App/modules/actions';
import { fetchCatBreedImageSuccess, fetchCatBreedImageFailed } from './actions';

import request from 'utils/request';
import fetchJsonp from 'fetch-jsonp';

const METHOD = 'breed.list'
const PET_FINDER_BASE_URL = `https://api.petfinder.com/${METHOD}?format=json&animal=cat`
const THE_CAT_API_BASE_URL = `https://api.thecatapi.com/v1`

export function* getCatBreeds() {
  // const requestURL = `${PET_FINDER_BASE_URL}&key=${process.env.PETFINDER_API_KEY}`;

  const requestURL = `${THE_CAT_API_BASE_URL}/breeds`;

  try {
    // const response = yield fetchJsonp(requestURL)
    //   .then(response => response.json())
    //   .then(json => json)

    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'x-api-key': process.env.THECAT_API_KEY
      }
    })

    yield put(fetchCatBreedsSuccess(response))

  } catch (err) {
    yield put(fetchCatBreedsFailed(err));
  }
}

export function* getCatBreedImage(params) {
  const { breedId } = params
  const requestURL = `${THE_CAT_API_BASE_URL}/images/search?breed_id=${breedId}`;
  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'x-api-key': process.env.THECAT_API_KEY
      }
    })

    yield put(fetchCatBreedImageSuccess(response))

  } catch (err) {
    yield put(fetchCatBreedImageFailed(err));
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
  yield takeLatest(FETCH_CAT_BREEDS_REQUEST, getCatBreeds);
  yield takeLatest(FETCH_CAT_BREED_IMAGE_REQUEST, getCatBreedImage);

}
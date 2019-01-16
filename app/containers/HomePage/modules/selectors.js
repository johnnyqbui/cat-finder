/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomeState = state => state.get('home', initialState);

const makeSelectCatBreedImage = () =>
  createSelector(selectHomeState, homeState => homeState.get('imageURL'));

  export { selectHomeState, makeSelectCatBreedImage };
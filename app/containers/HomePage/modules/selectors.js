/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCatBreedImage = state => state.get('catImage', initialState);

const makeSelectCatBreedImage = () =>
  createSelector(selectCatBreedImage, catBreedImageState => catBreedImageState.get('imageURL'));

export { selectCatBreedImage, makeSelectCatBreedImage };
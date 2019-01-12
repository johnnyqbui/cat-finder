import { createStructuredSelector } from 'reselect';

import {
  makeSelectLoading,
  makeSelectError,
  makeSelectCatBreeds,
} from 'containers/App/modules/selectors';

import {
  makeSelectCatBreedImage,
} from './modules/selectors';


import { fetchCatBreedsRequest } from 'containers/App/modules/actions';
import { fetchCatBreedImageRequest } from './modules/actions';

export function mapDispatchToProps(dispatch) {
  return {
    fetchCats: () => dispatch(fetchCatBreedsRequest()),
    fetchCatImage:(breedId) => dispatch(fetchCatBreedImageRequest(breedId))
  };
}

export function mapStateToProps() {
  return createStructuredSelector({
    loading: makeSelectLoading(),
    error: makeSelectError(),
    catBreeds: makeSelectCatBreeds(),
    catImage: makeSelectCatBreedImage()
  })
};

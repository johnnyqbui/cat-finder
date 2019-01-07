import { createStructuredSelector } from 'reselect';

import {
  makeSelectLoading,
  makeSelectError,
  makeSelectCatBreeds,
} from 'containers/App/modules/selectors';

import { fetchCatBreeds } from 'containers/App/modules/actions';

export function mapDispatchToProps(dispatch) {
  return {
    fetchCats: () => dispatch(fetchCatBreeds())
  };
}

export function mapStateToProps() {
  return createStructuredSelector({
    loading: makeSelectLoading(),
    error: makeSelectError(),
    catBreeds: makeSelectCatBreeds()
  })
};

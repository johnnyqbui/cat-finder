/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.get('global', initialState);

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectCatBreeds = () =>
  createSelector(selectGlobal, globalState => globalState.get('catBreeds').toJS());

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectCatBreeds
};
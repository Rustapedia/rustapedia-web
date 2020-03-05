/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectData = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.data,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectCurrentItem = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentItem,
  );

const makeSelectCurrentCategory = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentCategory,
  );

export {
  selectGlobal,
  makeSelectLocation,
  makeSelectData,
  makeSelectCurrentItem,
  makeSelectCurrentCategory,
};

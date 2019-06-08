/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectData = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.data,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectRepos = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.repositories,
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
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectData,
  makeSelectCurrentItem,
  makeSelectCurrentCategory,
};

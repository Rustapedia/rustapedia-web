/**
 * Header selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHeader = state => state.header || initialState;

const makeSelectCurrentNav = () =>
  createSelector(
    selectHeader,
    headerState => headerState.currentNav,
  );
export { selectHeader, makeSelectCurrentNav };

/**
 * itempage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectItem = state => state.item || initialState;

const makeSelectStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState,
  );

export { selectItem, makeSelectStatus };

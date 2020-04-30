/**
 * itempage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectItem = state => state.item || initialState;

const makeSelectLootStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.lootStatus,
  );

const makeSelectCraftStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.craftStatus,
  );

const makeSelectExperimentStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.experimentStatus,
  );

const makeSelectResearchStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.researchStatus,
  );

const makeSelectRepairStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.repairStatus,
  );

const makeSelectRecycleStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.recycleStatus,
  );

export {
  selectItem,
  makeSelectLootStatus,
  makeSelectCraftStatus,
  makeSelectExperimentStatus,
  makeSelectResearchStatus,
  makeSelectRepairStatus,
  makeSelectRecycleStatus,
};

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

const makeSelectEquipmentStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.equipmentStatus,
  );

const makeSelectBreedsStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.breedsStatus,
  );

const makeSelectGatherStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.gatherStatus,
  );

const makeSelectCookingStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.cookingStatus,
  );

const makeSelectCompostableStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.compostableStatus,
  );

const makeSelectCraftStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.craftStatus,
  );

const makeSelectUsedForCraftStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.usedForCraftStatus,
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

const makeSelectDurabilityStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.durabilityStatus,
  );

const makeSelectRecycleStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.recycleStatus,
  );

const makeSelectRecycledStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.recycledStatus,
  );

const makeSelectIngredientStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.ingredientStatus,
  );

const makeSelectFeedingStatus = () =>
  createSelector(
    selectItem,
    itemState => itemState.feedingStatus,
  );

export {
  selectItem,
  makeSelectLootStatus,
  makeSelectCraftStatus,
  makeSelectExperimentStatus,
  makeSelectResearchStatus,
  makeSelectRepairStatus,
  makeSelectRecycleStatus,
  makeSelectDurabilityStatus,
  makeSelectIngredientStatus,
  makeSelectRecycledStatus,
  makeSelectUsedForCraftStatus,
  makeSelectCompostableStatus,
  makeSelectCookingStatus,
  makeSelectGatherStatus,
  makeSelectEquipmentStatus,
  makeSelectBreedsStatus,
  makeSelectFeedingStatus,
};

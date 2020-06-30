/**
 * DurabilityTable selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDurability = state => state.durability || initialState;

const makeSelectExplosiveStatus = () =>
  createSelector(
    selectDurability,
    durabilityState => durabilityState.explosiveStatus,
  );

const makeSelectSamStatus = () =>
  createSelector(
    selectDurability,
    durabilityState => durabilityState.samStatus,
  );

const makeSelectMelleStatus = () =>
  createSelector(
    selectDurability,
    durabilityState => durabilityState.melleStatus,
  );

const makeSelectThrowingStatus = () =>
  createSelector(
    selectDurability,
    durabilityState => durabilityState.throwingStatus,
  );

const makeSelectGunsStatus = () =>
  createSelector(
    selectDurability,
    durabilityState => durabilityState.gunsStatus,
  );

export {
  selectDurability,
  makeSelectExplosiveStatus,
  makeSelectMelleStatus,
  makeSelectThrowingStatus,
  makeSelectGunsStatus,
  makeSelectSamStatus,
};

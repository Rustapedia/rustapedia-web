import {
  LOOT_STATUS_CHANGED,
  CRAFT_STATUS_CHANGED,
  EXPERIMENT_STATUS_CHANGED,
  RESEARCH_STATUS_CHANGED,
  RESET_TO_DEFAULT,
  SET_INITIAL_STATUS,
  LOOT_INFO_STATUS_CHANGED,
  EXPERIMENTATION_STATUS_CHANGED,
} from './constants';

export function lootStatusChange(lootStatus) {
  return {
    type: LOOT_STATUS_CHANGED,
    lootStatus,
  };
}
export function lootInfoStatusChange(lootInfoStatus) {
  return {
    type: LOOT_INFO_STATUS_CHANGED,
    lootInfoStatus,
  };
}
export function craftStatusChange(craftStatus) {
  return {
    type: CRAFT_STATUS_CHANGED,
    craftStatus,
  };
}
export function experimentStatusChange(experimentStatus) {
  return {
    type: EXPERIMENT_STATUS_CHANGED,
    experimentStatus,
  };
}
export function experimentationStatusChange(experimentationStatus) {
  return {
    type: EXPERIMENTATION_STATUS_CHANGED,
    experimentationStatus,
  };
}
export function researchStatusChange(researchStatus) {
  return {
    type: RESEARCH_STATUS_CHANGED,
    researchStatus,
  };
}
export function resetToDefault() {
  return {
    type: RESET_TO_DEFAULT,
  };
}

export function setInitialStatus(currentItem) {
  return {
    type: SET_INITIAL_STATUS,
    currentItem,
  };
}

import {
  LOOT_STATUS_CHANGED,
  CRAFT_STATUS_CHANGED,
  RESET_TO_DEFAULT,
  SET_INITIAL_STATUS,
} from './constants';

export function lootStatusChange(lootStatus) {
  return {
    type: LOOT_STATUS_CHANGED,
    lootStatus,
  };
}
export function craftStatusChange(craftStatus) {
  return {
    type: CRAFT_STATUS_CHANGED,
    craftStatus,
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

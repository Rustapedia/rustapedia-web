import produce from 'immer';
import {
  LOOT_STATUS_CHANGED,
  CRAFT_STATUS_CHANGED,
  EXPERIMENT_STATUS_CHANGED,
  RESEARCH_STATUS_CHANGED,
  RESET_TO_DEFAULT,
  SET_INITIAL_STATUS,
} from './constants';

// The initial state of the ItemPage
export const initialState = {
  lootStatus: false,
  craftStatus: false,
  experimentStatus: false,
  researchStatus: false,
  experimentationStatus: false,
};

/* eslint-disable default-case, no-param-reassign */
const itemReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOOT_STATUS_CHANGED:
        draft.lootStatus = true;
        draft.craftStatus = false;
        draft.experimentStatus = false;
        draft.researchStatus = false;
        break;
      case CRAFT_STATUS_CHANGED:
        draft.craftStatus = true;
        draft.lootStatus = false;
        draft.experimentStatus = false;
        draft.researchStatus = false;
        break;
      case EXPERIMENT_STATUS_CHANGED:
        draft.craftStatus = false;
        draft.lootStatus = false;
        draft.experimentStatus = true;
        draft.researchStatus = false;
        break;
      case RESEARCH_STATUS_CHANGED:
        draft.researchStatus = true;
        draft.craftStatus = false;
        draft.lootStatus = false;
        draft.experimentStatus = false;
        break;
      case RESET_TO_DEFAULT:
        draft.craftStatus = false;
        draft.lootStatus = false;
        draft.experimentStatus = false;
        draft.researchStatus = false;
        break;
      case SET_INITIAL_STATUS:
        if (
          action.currentItem.loot.length > 0 ||
          action.currentItem.lootInfo.length > 0
        ) {
          draft.lootStatus = true;
        } else if (
          action.currentItem.craftInfo != null ||
          action.currentItem.usedForCraft.length > 0
        ) {
          draft.craftStatus = true;
        } else if (
          action.currentItem.experiment !== null ||
          action.currentItem.experimentation.length > 0
        ) {
          draft.experimentStatus = true;
        } else if (
          action.currentItem.research !== null ||
          action.currentItem.researches.length > 0
        ) {
          draft.researchStatus = true;
        }
        break;
    }
  });

export default itemReducer;

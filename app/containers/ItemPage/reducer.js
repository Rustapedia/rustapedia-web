import produce from 'immer';
import {
  LOOT_STATUS_CHANGED,
  CRAFT_STATUS_CHANGED,
  RESET_TO_DEFAULT,
  SET_INITIAL_STATUS,
} from './constants';

// The initial state of the ItemPage
export const initialState = {
  lootStatus: false,
  craftStatus: false,
};

/* eslint-disable default-case, no-param-reassign */
const itemReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOOT_STATUS_CHANGED:
        draft.lootStatus = true;
        draft.craftStatus = false;
        break;
      case CRAFT_STATUS_CHANGED:
        draft.craftStatus = true;
        draft.lootStatus = false;
        break;
      case RESET_TO_DEFAULT:
        draft.craftStatus = false;
        draft.lootStatus = false;
        break;
      case SET_INITIAL_STATUS:
        if (action.currentItem.loot !== undefined) {
          draft.lootStatus = true;
        } else if (action.currentItem.craft !== undefined) {
          draft.craftStatus = true;
        }
        break;
    }
  });

export default itemReducer;

import produce from 'immer';
import {
  EXPLOSIVE_STATUS_CHANGED,
  MELEE_STATUS_CHANGED,
  GUNS_STATUS_CHANGED,
  THROWING_STATUS_CHANGED,
  SAM_STATUS_CHANGED,
  RESET_TO_DEFAULT,
  SET_INITIAL_STATUS,
} from './constants';

// The initial state of the ItemPage
export const initialState = {
  explosiveStatus: true,
  melleStatus: false,
  gunsStatus: false,
  throwingStatus: false,
  samStatus: false,
};

/* eslint-disable default-case, no-param-reassign */
const durabilityReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RESET_TO_DEFAULT:
        draft.explosiveStatus = false;
        draft.melleStatus = false;
        draft.gunsStatus = false;
        draft.samStatus = false;
        draft.throwingStatus = false;
        break;
      case EXPLOSIVE_STATUS_CHANGED:
        draft.explosiveStatus = true;
        draft.melleStatus = false;
        draft.gunsStatus = false;
        draft.samStatus = false;
        draft.throwingStatus = false;
        break;
      case MELEE_STATUS_CHANGED:
        draft.explosiveStatus = false;
        draft.melleStatus = true;
        draft.gunsStatus = false;
        draft.samStatus = false;
        draft.throwingStatus = false;
        break;
      case GUNS_STATUS_CHANGED:
        draft.explosiveStatus = false;
        draft.melleStatus = false;
        draft.samStatus = false;
        draft.gunsStatus = true;
        draft.throwingStatus = false;
        break;
      case THROWING_STATUS_CHANGED:
        draft.explosiveStatus = false;
        draft.melleStatus = false;
        draft.gunsStatus = false;
        draft.samStatus = false;
        draft.throwingStatus = true;
        break;
      case SAM_STATUS_CHANGED:
        draft.explosiveStatus = false;
        draft.melleStatus = false;
        draft.gunsStatus = false;
        draft.throwingStatus = false;
        draft.samStatus = true;
        break;
      case SET_INITIAL_STATUS:
        if (action.currentItem.explosive.length > 0) {
          draft.explosiveStatus = true;
        } else if (action.currentItem.guns.length > 0) {
          draft.gunsStatus = true;
        } else if (action.currentItem.melle.length > 0) {
          draft.melleStatus = true;
        } else if (action.currentItem.throwing.length > 0) {
          draft.throwingStatus = true;
        } else if (action.currentItem.sam.length > 0) {
          draft.samStatus = true;
        }
        break;
    }
  });

export default durabilityReducer;

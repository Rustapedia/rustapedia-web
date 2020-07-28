/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CURRENT_ITEM_CHANGED,
  CURRENT_CATEGORY_CHANGED,
  CURRENT_ITEM_SET,
  LOAD_DATA,
  SHOW_MENU_CHANGED,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  data: [],
  currentItem: {},
  currentCategory: {},
  showMenu: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CURRENT_ITEM_CHANGED:
        draft.currentItem = action.item;
        break;
      case SHOW_MENU_CHANGED:
        draft.showMenu = !state.showMenu;
        break;
      case CURRENT_ITEM_SET:
        draft.currentItem = action.item;
        break;

      case CURRENT_CATEGORY_CHANGED:
        draft.currentCategory = action.category;
        draft.showMenu = false;
        break;

      case LOAD_DATA:
        draft.data = action.data;
        break;
    }
  });

export default appReducer;

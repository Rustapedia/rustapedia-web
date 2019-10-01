import produce from 'immer';
import { SHOW_SUB_MENU, CURRENT_NAV_CHANGED } from './constants';

// The initial state of the Header
export const initialState = {
  showSubMenu: false,
  currentNav: {},
};

/* eslint-disable default-case, no-param-reassign */
const headerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SHOW_SUB_MENU:
        draft.showSubMenu = true;
        break;
      case CURRENT_NAV_CHANGED:
        draft.currentNav = action.nav;
        break;
    }
  });

export default headerReducer;

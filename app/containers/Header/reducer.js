import produce from 'immer';
import { CURRENT_NAV_CHANGED } from './constants';

// The initial state of the Header
export const initialState = {
  currentNav: {},
};

/* eslint-disable default-case, no-param-reassign */
const headerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CURRENT_NAV_CHANGED:
        draft.currentNav = action.nav;
        break;
    }
  });

export default headerReducer;

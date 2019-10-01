/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import data from './data';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  CURRENT_ITEM_CHANGED,
  CURRENT_CATEGORY_CHANGED,
  LOAD_IMAGES,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  images: {},
  data,
  currentItem: {},
  currentCategory: [],
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_IMAGES:
        draft.images = action.images;
        break;

      case CURRENT_ITEM_CHANGED:
        draft.currentItem = action.item;
        break;

      case CURRENT_CATEGORY_CHANGED:
        draft.currentCategory = action.category;
        break;
    }
  });

export default appReducer;

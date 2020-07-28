/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CURRENT_ITEM_CHANGED,
  CURRENT_CATEGORY_CHANGED,
  CURRENT_ITEM_SET,
  LOAD_DATA,
  SHOW_MENU_CHANGED,
} from './constants';

export function currentItemChange(item) {
  return {
    type: CURRENT_ITEM_CHANGED,
    item,
  };
}

export function showMenuChange() {
  return {
    type: SHOW_MENU_CHANGED,
  };
}

export function currentItemSet(item) {
  return {
    type: CURRENT_ITEM_SET,
    item,
  };
}

export function currentCategoryChange(category) {
  return {
    type: CURRENT_CATEGORY_CHANGED,
    category,
  };
}

export function loadData(data) {
  return {
    type: LOAD_DATA,
    data,
  };
}

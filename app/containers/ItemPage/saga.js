/**
 * Gets the repositories of the user from Github
 */

import { put, select, takeLatest } from 'redux-saga/effects';
import { CURRENT_ITEM_CHANGED } from '../App/constants';
import { makeSelectCurrentItem } from '../App/selectors';
import { RESET_TO_DEFAULT } from './constants';
import { resetToDefault, setInitialStatus } from './actions';
/* eslint no-empty: "error" */
export function* resetStatus() {
  try {
    yield put(resetToDefault());
  } catch (err) {
    // empty
  }
}

export function* setInitStatus() {
  try {
    const currentItem = yield select(makeSelectCurrentItem());
    yield put(setInitialStatus(currentItem));
  } catch (err) {
    // empty
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* currentItemStatus() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(CURRENT_ITEM_CHANGED, resetStatus);

  yield takeLatest(RESET_TO_DEFAULT, setInitStatus);
}

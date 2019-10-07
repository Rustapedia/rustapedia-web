import { CURRENT_NAV_CHANGED } from './constants';

export function currentNavChange(nav) {
  return {
    type: CURRENT_NAV_CHANGED,
    nav,
  };
}

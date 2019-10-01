import { SHOW_SUB_MENU, CURRENT_NAV_CHANGED } from './constants';

export function showSubMenuStatus(showSubMenu) {
  return {
    type: SHOW_SUB_MENU,
    showSubMenu,
  };
}

export function currentNavChange(nav) {
  return {
    type: CURRENT_NAV_CHANGED,
    nav,
  };
}

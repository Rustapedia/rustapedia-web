/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
import gql from 'graphql-tag';
export const CURRENT_ITEM_CHANGED = 'CURRENT_ITEM_CHANGED';
export const CURRENT_ITEM_SET = 'CURRENT_ITEM_SET';
export const CURRENT_CATEGORY_CHANGED = 'CURRENT_CATEGORY_CHANGED';
export const LOAD_DATA = 'LOAD_DATA';
export const SHOW_MENU_CHANGED = 'SHOW_MENU';
export const GET_DATA = gql`
  {
    allCategories {
      name
      id
      subCategory {
        id
        name
        items {
          id
          name
          image {
            id
            publicUrl
          }
        }
      }
    }
  }
`;

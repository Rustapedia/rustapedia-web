/*
 * ItemConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOOT_STATUS_CHANGED = 'LOOT_STATUS_CHANGED';
export const RECYCLED_STATUS_CHANGED = 'RECYCLED_STATUS_CHANGED';
export const CRAFT_STATUS_CHANGED = 'CRAFT_STATUS_CHANGED';
export const INGREDIENT_STATUS_CHANGED = 'INGREDIENT_STATUS_CHANGED';
export const EXPERIMENT_STATUS_CHANGED = 'EXPERIMENT_STATUS_CHANGED';
export const RESEARCH_STATUS_CHANGED = 'RESEARCH_STATUS_CHANGED';
export const RESET_TO_DEFAULT = 'RESET_TO_DEFAULT';
export const SET_INITIAL_STATUS = 'SET_INITIAL_STATUS';
export const REPAIR_STATUS_CHANGED = 'REPAIR_STATUS_CHANGED';
export const RECYCLE_STATUS_CHANGED = 'RECYCLE_STATUS_CHANGED';
export const DURABILITY_STATUS_CHANGED = 'DURABILITY_STATUS_CHANGED';

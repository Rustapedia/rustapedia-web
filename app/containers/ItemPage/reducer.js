/* eslint-disable no-debugger */
import produce from 'immer';
import {
  STATUS_CHANGED,
  RESET_TO_DEFAULT,
  SET_INITIAL_STATUS,
} from './constants';

// The initial state of the ItemPage
export const initialState = {
  loot: false,
  craft: false,
  experiment: false,
  research: false,
  repair: false,
  recycle: false,
  recycled: false,
  durability: false,
  ingredient: false,
  usedForCraft: false,
  compostable: false,
  cooking: false,
  gather: false,
  equipment: false,
  breeds: false,
  feeding: false,
};

function resetDefault(state, propName) {
  const draft = state;
  draft.craft = false;
  draft.loot = false;
  draft.experiment = false;
  draft.research = false;
  draft.repair = false;
  draft.recycle = false;
  draft.durability = false;
  draft.ingredient = false;
  draft.recycled = false;
  draft.usedForCraft = false;
  draft.compostable = false;
  draft.cooking = false;
  draft.gather = false;
  draft.equipment = false;
  draft.breeds = false;
  draft.feeding = false;
  draft[propName] = true;
  return draft;
}

/* eslint-disable default-case, no-param-reassign */
const itemReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case STATUS_CHANGED:
        resetDefault(draft, action.payload);
        break;
      case RESET_TO_DEFAULT:
        draft.craft = false;
        draft.loot = false;
        draft.experiment = false;
        draft.research = false;
        draft.repair = false;
        draft.recycle = false;
        draft.durability = false;
        draft.ingredient = false;
        draft.recycled = false;
        draft.usedForCraft = false;
        draft.compostable = false;
        draft.cooking = false;
        draft.gather = false;
        draft.equipment = false;
        draft.breeds = false;
        draft.feeding = false;
        break;
      case SET_INITIAL_STATUS:
        if (
          action.currentItem.loot.length > 0 ||
          action.currentItem.lootInfo.length > 0
        ) {
          draft.loot = true;
        } else if (action.currentItem.craftInfo != null) {
          draft.craft = true;
        } else if (action.currentItem.usedForCraft.length > 0) {
          draft.usedForCraft = true;
        } else if (action.currentItem.ingredientFor.length > 0) {
          draft.ingredient = true;
        } else if (
          action.currentItem.experiment !== null ||
          action.currentItem.experimentation.length > 0
        ) {
          draft.experiment = true;
        } else if (
          action.currentItem.research !== null ||
          action.currentItem.researches.length > 0
        ) {
          draft.research = true;
        } else if (
          action.currentItem.repair.length > 0 ||
          action.currentItem.repairs.length > 0
        ) {
          draft.repair = true;
        } else if (
          action.currentItem.recycle !== null ||
          action.currentItem.recycler.length > 0
        ) {
          draft.recycle = true;
        } else if (action.currentItem.recycledFrom.length > 0) {
          draft.recycled = true;
        } else if (
          action.currentItem.throwing.length > 0 ||
          action.currentItem.explosive.length > 0 ||
          action.currentItem.melle.length > 0 ||
          action.currentItem.guns.length > 0
        ) {
          draft.durability = true;
        } else if (
          action.currentItem.compostable !== null ||
          action.currentItem.composter.length > 0 ||
          action.currentItem.composting.length > 0
        ) {
          draft.compostable = true;
        } else if (
          action.currentItem.cookingInfo.length > 0 ||
          action.currentItem.cooking.length > 0
        ) {
          draft.cooking = true;
        } else if (
          action.currentItem.equipment.length > 0 ||
          action.currentItem.equipmentFor !== null
        ) {
          draft.equipment = true;
        } else if (
          action.currentItem.gatheringInfo.length > 0 ||
          action.currentItem.gather.length > 0 ||
          action.currentItem.gatheredFrom.length > 0
        ) {
          draft.gather = true;
        } else if (action.currentItem.breeds.length > 0) {
          draft.breeds = true;
        } else if (action.currentItem.feeding.length > 0) {
          draft.feeding = true;
        }
        break;
    }
  });

export default itemReducer;

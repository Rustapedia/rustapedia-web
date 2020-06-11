import produce from 'immer';
import {
  LOOT_STATUS_CHANGED,
  CRAFT_STATUS_CHANGED,
  INGREDIENT_STATUS_CHANGED,
  RECYCLE_STATUS_CHANGED,
  RECYCLED_STATUS_CHANGED,
  EXPERIMENT_STATUS_CHANGED,
  RESEARCH_STATUS_CHANGED,
  REPAIR_STATUS_CHANGED,
  DURABILITY_STATUS_CHANGED,
  RESET_TO_DEFAULT,
  SET_INITIAL_STATUS,
  USEDFORCRAFT_STATUS_CHANGED,
  COMPOSTABLE_STATUS_CHANGED,
  COOKING_STATUS_CHANGED,
  GATHER_STATUS_CHANGED,
  EQUIPMENT_STATUS_CHANGED,
  BREEDS_STATUS_CHANGED,
  FEEDING_STATUS_CHANGED,
} from './constants';

// The initial state of the ItemPage
export const initialState = {
  lootStatus: false,
  craftStatus: false,
  experimentStatus: false,
  researchStatus: false,
  repairStatus: false,
  recycleStatus: false,
  recycledStatus: false,
  durabilityStatus: false,
  ingredientStatus: false,
  usedForCraft: false,
  compostableStatus: false,
  cookingStatus: false,
  gatherStatus: false,
  equipmentStatus: false,
  breedsStatus: false,
  feedingStatus: false,
};

/* eslint-disable default-case, no-param-reassign */
const itemReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOOT_STATUS_CHANGED:
        draft.lootStatus = true;
        break;
      case FEEDING_STATUS_CHANGED:
        draft.feedingStatus = true;
        break;
      case EQUIPMENT_STATUS_CHANGED:
        draft.equipmentStatus = true;
        break;
      case CRAFT_STATUS_CHANGED:
        draft.craftStatus = true;
        break;
      case USEDFORCRAFT_STATUS_CHANGED:
        draft.usedForCraftStatus = true;
        break;
      case INGREDIENT_STATUS_CHANGED:
        draft.ingredientStatus = true;
        break;
      case EXPERIMENT_STATUS_CHANGED:
        draft.experimentStatus = true;
        break;
      case RESEARCH_STATUS_CHANGED:
        draft.researchStatus = true;
        break;
      case REPAIR_STATUS_CHANGED:
        draft.repairStatus = true;
        break;
      case RECYCLE_STATUS_CHANGED:
        draft.recycleStatus = true;
        break;
      case RECYCLED_STATUS_CHANGED:
        draft.recycledStatus = true;
        break;
      case DURABILITY_STATUS_CHANGED:
        draft.durabilityStatus = true;
        break;
      case COMPOSTABLE_STATUS_CHANGED:
        draft.compostableStatus = true;
        break;
      case COOKING_STATUS_CHANGED:
        draft.cookingStatus = true;
        break;
      case GATHER_STATUS_CHANGED:
        draft.gatherStatus = true;
        break;
      case BREEDS_STATUS_CHANGED:
        draft.breedsStatus = true;
        break;
      case RESET_TO_DEFAULT:
        draft.craftStatus = false;
        draft.lootStatus = false;
        draft.experimentStatus = false;
        draft.researchStatus = false;
        draft.repairStatus = false;
        draft.recycleStatus = false;
        draft.durabilityStatus = false;
        draft.ingredientStatus = false;
        draft.recycledStatus = false;
        draft.usedForCraftStatus = false;
        draft.compostableStatus = false;
        draft.cookingStatus = false;
        draft.gatherStatus = false;
        draft.equipmentStatus = false;
        draft.breedsStatus = false;
        draft.feedingStatus = false;
        break;
      case SET_INITIAL_STATUS:
        if (
          action.currentItem.loot.length > 0 ||
          action.currentItem.lootInfo.length > 0
        ) {
          draft.lootStatus = true;
        } else if (action.currentItem.craftInfo != null) {
          draft.craftStatus = true;
        } else if (action.currentItem.usedForCraft.length > 0) {
          draft.usedForCraftStatus = true;
        } else if (action.currentItem.feeding.length > 0) {
          draft.feedingStatus = true;
        } else if (action.currentItem.ingredientFor.length > 0) {
          draft.ingredientStatus = true;
        } else if (
          action.currentItem.compostable !== null ||
          action.currentItem.composter.length > 0 ||
          action.currentItem.composting.length > 0
        ) {
          draft.compostableStatus = true;
        } else if (
          action.currentItem.experiment !== null ||
          action.currentItem.experimentation.length > 0
        ) {
          draft.experimentStatus = true;
        } else if (
          action.currentItem.research !== null ||
          action.currentItem.researches.length > 0
        ) {
          draft.researchStatus = true;
        } else if (
          action.currentItem.repair.length > 0 ||
          action.currentItem.repairs.length > 0
        ) {
          draft.repairStatus = true;
        } else if (
          action.currentItem.recycle !== null ||
          action.currentItem.recycler.length > 0
        ) {
          draft.recycleStatus = true;
        } else if (action.currentItem.recycledFrom.length > 0) {
          draft.recycledStatus = true;
        } else if (
          action.currentItem.throwing.length > 0 ||
          action.currentItem.explosive.length > 0 ||
          action.currentItem.melle.length > 0 ||
          action.currentItem.guns.length > 0
        ) {
          draft.durabilityStatus = true;
        } else if (
          action.currentItem.equipment.length > 0 ||
          action.currentItem.equipmentFor !== null
        ) {
          draft.equipmentStatus = true;
        } else if (
          action.currentItem.cookingInfo.length > 0 ||
          action.currentItem.cooking.length > 0
        ) {
          draft.cookingStatus = true;
        } else if (
          action.currentItem.gatheringInfo.length > 0 ||
          action.currentItem.gather.length > 0 ||
          action.currentItem.gatheredFrom.length > 0
        ) {
          draft.gatherStatus = true;
        } else if (action.currentItem.breeds.length > 0) {
          draft.breedsStatus = true;
        }
        break;
    }
  });

export default itemReducer;

import {
  LOOT_STATUS_CHANGED,
  EQUIPMENT_STATUS_CHANGED,
  CRAFT_STATUS_CHANGED,
  EXPERIMENT_STATUS_CHANGED,
  RESEARCH_STATUS_CHANGED,
  RESET_TO_DEFAULT,
  SET_INITIAL_STATUS,
  REPAIR_STATUS_CHANGED,
  RECYCLE_STATUS_CHANGED,
  DURABILITY_STATUS_CHANGED,
  INGREDIENT_STATUS_CHANGED,
  RECYCLED_STATUS_CHANGED,
  USEDFORCRAFT_STATUS_CHANGED,
  COMPOSTABLE_STATUS_CHANGED,
  COOKING_STATUS_CHANGED,
  GATHER_STATUS_CHANGED,
  BREEDS_STATUS_CHANGED,
  FEEDING_STATUS_CHANGED,
} from './constants';

export function lootStatusChange(lootStatus) {
  return {
    type: LOOT_STATUS_CHANGED,
    lootStatus,
  };
}
export function feedingStatusChange(feedingStatus) {
  return {
    type: FEEDING_STATUS_CHANGED,
    feedingStatus,
  };
}
export function breedsStatusChange(breedsStatus) {
  return {
    type: BREEDS_STATUS_CHANGED,
    breedsStatus,
  };
}
export function equipmentStatusChange(equipmentStatus) {
  return {
    type: EQUIPMENT_STATUS_CHANGED,
    equipmentStatus,
  };
}
export function gatherStatusChange(gatherStatus) {
  return {
    type: GATHER_STATUS_CHANGED,
    gatherStatus,
  };
}
export function cookingStatusChange(cookingStatus) {
  return {
    type: COOKING_STATUS_CHANGED,
    cookingStatus,
  };
}
export function compostableStatusChange(compostableStatus) {
  return {
    type: COMPOSTABLE_STATUS_CHANGED,
    compostableStatus,
  };
}
export function craftStatusChange(craftStatus) {
  return {
    type: CRAFT_STATUS_CHANGED,
    craftStatus,
  };
}
export function usedForCraftStatusChange(usedForCraftStatus) {
  return {
    type: USEDFORCRAFT_STATUS_CHANGED,
    usedForCraftStatus,
  };
}
export function experimentStatusChange(experimentStatus) {
  return {
    type: EXPERIMENT_STATUS_CHANGED,
    experimentStatus,
  };
}
export function researchStatusChange(researchStatus) {
  return {
    type: RESEARCH_STATUS_CHANGED,
    researchStatus,
  };
}
export function repairStatusChange(repairStatus) {
  return {
    type: REPAIR_STATUS_CHANGED,
    repairStatus,
  };
}
export function recycleStatusChange(recycleStatus) {
  return {
    type: RECYCLE_STATUS_CHANGED,
    recycleStatus,
  };
}
export function recycledStatusChange(recycledStatus) {
  return {
    type: RECYCLED_STATUS_CHANGED,
    recycledStatus,
  };
}
export function durabilityStatusChange(durabilityStatus) {
  return {
    type: DURABILITY_STATUS_CHANGED,
    durabilityStatus,
  };
}
export function ingredientStatusChange(ingredientStatus) {
  return {
    type: INGREDIENT_STATUS_CHANGED,
    ingredientStatus,
  };
}
export function resetToDefault() {
  return {
    type: RESET_TO_DEFAULT,
  };
}

export function setInitialStatus(currentItem) {
  return {
    type: SET_INITIAL_STATUS,
    currentItem,
  };
}

import {
  EXPLOSIVE_STATUS_CHANGED,
  MELEE_STATUS_CHANGED,
  GUNS_STATUS_CHANGED,
  THROWING_STATUS_CHANGED,
  SAM_STATUS_CHANGED,
} from './constants';

export function explosiveStatusChange(explosiveStatus) {
  return {
    type: EXPLOSIVE_STATUS_CHANGED,
    explosiveStatus,
  };
}
export function samStatusChange(samStatus) {
  return {
    type: SAM_STATUS_CHANGED,
    samStatus,
  };
}
export function melleStatusChange(melleStatus) {
  return {
    type: MELEE_STATUS_CHANGED,
    melleStatus,
  };
}
export function gunsStatusChange(gunsStatus) {
  return {
    type: GUNS_STATUS_CHANGED,
    gunsStatus,
  };
}
export function throwingStatusChange(throwingStatus) {
  return {
    type: THROWING_STATUS_CHANGED,
    throwingStatus,
  };
}

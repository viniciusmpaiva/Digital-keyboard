import * as types from '../types';

export function getPresetsRequest(payload) {
  return {
    type: types.GET_PRESETS_REQUEST,
    payload,
  };
}

export function getPresetsSuccess(payload) {
  return {
    type: types.GET_PRESETS_SUCCESS,
    payload,
  };
}

export function getPresetsFailed() {
  return {
    type: types.GET_PRESETS_FAILED,
  };
}

export function postPresetsRequest(payload) {
  return {
    type: types.POST_PRESETS_REQUEST,
    payload,
  };
}

export function postPresetsSuccess(payload) {
  return {
    type: types.POST_PRESETS_SUCCESS,
    payload,
  };
}

export function postPresetsFailed() {
  return {
    type: types.POST_PRESETS_FAILED,
  };
}

import * as types from '../types';

export function getProfilesRequest() {
  return {
    type: types.GET_PROFILES_REQUEST,
  };
}

export function getProfilesSuccess(payload) {
  return {
    type: types.GET_PROFILES_SUCCESS,
    payload,
  };
}

export function getProfilesFailed() {
  return {
    type: types.GET_PROFILES_FAILED,
  };
}

export function postProfilesRequest(payload) {
  return {
    type: types.POST_PROFILES_REQUEST,
    payload,
  };
}

export function postProfilesSuccess(payload) {
  return {
    type: types.POST_PROFILES_SUCCESS,
    payload,
  };
}

export function postProfilesFailed() {
  return {
    type: types.POST_PROFILES_FAILED,
  };
}

export function selectProfile(payload) {
  return {
    type: types.SELECT_PROFILE,
    payload,
  };
}

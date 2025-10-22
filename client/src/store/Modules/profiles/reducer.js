import * as types from '../types';

const initialState = {
  profiles: [],
  selectedProfile: null,
  presets: [],
  isLoading: false,
};

export default function profiles(state = initialState, action) {
  switch (action.type) {
    case types.GET_PROFILES_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case types.GET_PROFILES_SUCCESS: {
      const newState = { ...state };
      newState.profiles = action.payload;
      newState.isLoading = false;
      return newState;
    }
    case types.GET_PROFILES_FAILED: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }
    case types.POST_PROFILES_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case types.POST_PROFILES_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }
    case types.POST_PROFILES_FAILED: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }
    case types.SELECT_PROFILE: {
      const newState = { ...state };
      newState.selectedProfile = action.payload;
      return newState;
    }
    default:
      return state;
  }
}

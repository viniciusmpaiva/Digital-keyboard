import * as types from '../types';

const initialState = {
  presets: [],
  isLoading: false,
};

export default function presets(state = initialState, action) {
  switch (action.type) {
    case types.GET_PRESETS_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case types.GET_PRESETS_SUCCESS: {
      const newState = { ...state };
      newState.presets = action.payload;
      newState.isLoading = false;
      return newState;
    }
    case types.GET_PRESETS_FAILED: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }
    case types.POST_PRESETS_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case types.POST_PRESETS_SUCCESS: {
      const newState = { ...state };
      newState.presets = action.payload;
      newState.isLoading = false;
      return newState;
    }
    case types.POST_PRESETS_FAILED: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }
    default:
      return state;
  }
}

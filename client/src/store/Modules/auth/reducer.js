import { use } from 'react';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return state;
    }

    case LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    case LOGIN_SUCCESS: {
      console.log('LOGIN_SUCCESS', action.payload);
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      const user = {
        email: action.payload.email,
      };
      newState.user = user;
      return newState;
    }

    default:
      return state;
  }
}

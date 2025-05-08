import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/token', payload);
    yield put(actions.loginSuccess({ ...response.data }));
  } catch (error) {
    toast.error('User or password invalid');

    yield put(actions.loginFailed());
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);

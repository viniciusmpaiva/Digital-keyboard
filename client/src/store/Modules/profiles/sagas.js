import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';
import { digitalKeyboardBackend } from '../../../services/axios';

function* getProfilesRequest() {
  try {
    const { data } = yield call(digitalKeyboardBackend.get, '/profiles');
    yield put(actions.getProfilesSuccess(data));
  } catch (error) {
    toast.error('Failed to fetch profiles');
    yield put(actions.getProfilesFailed());
  }
}

function* postProfilesRequest({ payload }) {
  const { name } = payload;
  console.log(`profile name: ${name}`);
  try {
    yield call(digitalKeyboardBackend.post, '/profiles', {
      name,
    });

    const { data } = yield call(digitalKeyboardBackend.get, '/profiles');
    yield put(actions.getProfilesSuccess(data));
  } catch (error) {
    toast.error('Failed to post new profile');
    yield put(actions.getProfilesFailed());
  }
}
export default all([
  takeLatest(types.GET_PROFILES_REQUEST, getProfilesRequest),
  takeLatest(types.POST_PROFILES_REQUEST, postProfilesRequest),
]);

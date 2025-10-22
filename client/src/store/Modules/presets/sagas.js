import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';
import { digitalKeyboardBackend } from '../../../services/axios';

function* getPresetsRequest({ payload }) {
  const { profileId } = payload;

  try {
    const { data } = yield call(
      digitalKeyboardBackend.get,
      `/presets/${profileId}`
    );
    yield put(actions.getPresetsSuccess(data));
  } catch (error) {
    toast.error('Failed to fetch presets');
    yield put(actions.getPresetsFailed());
  }
}

function* postPresetsRequest({ payload }) {
  const { name, presetData, numberOfBoxes, profileId } = payload;
  try {
    yield call(digitalKeyboardBackend.post, '/presets', {
      name,
      presetData,
      numberOfBoxes,
      profileId,
    });

    toast.success('Preset created successfully!');

    // Refetch all presets to keep the state as an array
    const { data } = yield call(
      digitalKeyboardBackend.get,
      `/presets/${profileId}`
    );
    yield put(actions.postPresetsSuccess(data));
  } catch (error) {
    toast.error('Failed to create preset');
    yield put(actions.postPresetsFailed());
  }
}

export default all([
  takeLatest(types.GET_PRESETS_REQUEST, getPresetsRequest),
  takeLatest(types.POST_PRESETS_REQUEST, postPresetsRequest),
]);

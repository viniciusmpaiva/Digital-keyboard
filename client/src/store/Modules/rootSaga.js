import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import profiles from './profiles/sagas';
import presets from './presets/sagas';

export default function* rootSaga() {
  return yield all([auth, profiles, presets]);
}

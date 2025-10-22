import { combineReducers } from 'redux';

import auth from './auth/reducer';
import profiles from './profiles/reducer';
import presets from './presets/reducer';

export default combineReducers({
  auth,
  profiles,
  presets,
});

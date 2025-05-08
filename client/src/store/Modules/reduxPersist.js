import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'DigitalKeyboard',
      storage,
      whitelist: ['auth'], // Add the reducers you want to persist
    },
    reducers
  );

  return persistedReducers;
};

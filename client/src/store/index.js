import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './Modules/rootReducer';
import rootSaga from './Modules/rootSaga';
import persistedReducer from './Modules/reduxPersist';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer(rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;

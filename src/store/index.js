import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {rootReducers} from './rootReducers';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();
const sagaMiddlewares = [sagaMiddleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  sagaMiddlewares.push(createDebugger());
}

export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(...sagaMiddlewares),
});

sagaMiddleware.run(rootSagas);

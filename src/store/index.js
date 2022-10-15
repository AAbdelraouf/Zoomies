// // // import createSagaMiddleware from 'redux-saga';
// // // // import {createStore, applyMiddleware} from 'redux';

// // // // import {persistStore, persistReducer} from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';
// // // // import AsyncStorage from '@react-native-community/async-storage';
// // // import AsyncStorage from '@react-native-async-storage/async-storage';

// // // // const persistConfig = {
// // // //   key: 'root',
// // // //   storage: AsyncStorage,
// // // // };

// // // // const persistedReducer = persistReducer(persistConfig, rootReducers);

// // // // const sagaMiddleware = createSagaMiddleware();
// // // // const middlewares = [sagaMiddleware];

// // // // let store;

// // // // export default () => {
// // // //   store = createStore(persistedReducer, {}, applyMiddleware(...middlewares));

// // // //   sagaMiddleware.run(rootSaga);

// // // //   let persistor = persistStore(store);

// // // //   return {store, persistor};
// // // // };

// // // // export const getStore = () => {
// // // //   return store;
// // // // };

// // // // // const store = createStore(rootReducers, applyMiddleware(...middlewares));
// // // // // export {store};

// // // import {applyMiddleware, createStore} from 'redux';
// // // import {Persistor, persistStore} from 'redux-persist';
// // // import thunk from 'redux-thunk';
// // // import createSagaMiddleware from 'redux-saga';
// // // // import rootSagas from './rootSagas';
// // // // import reducer from './reducer';

// // // const sagaMiddleware = createSagaMiddleware();

// // // // eslint-disable-next-line @typescript-eslint/no-explicit-any
// // // const middlewares = [thunk, sagaMiddleware];

// // // if (__DEV__) {
// // //   // eslint-disable-next-line @typescript-eslint/no-var-requires
// // //   const createDebugger = require('redux-flipper').default;
// // //   middlewares.push(createDebugger());
// // // }

// // // let store;

// // // export default (initialState = {}) => {
// // //   const persistedReducer = rootReducers;
// // //   const composer = applyMiddleware(...middlewares);

// // //   store = createStore(persistedReducer, initialState, composer);

// // //   sagaMiddleware.run(rootSaga);

// // //   const persistor = persistStore(store);

// // //   return {
// // //     store,
// // //     persistor,
// // //   };
// // // };

// // // export const getStore = () => {
// // //   return store;
// // // };

// // import {createStore} from 'redux';
// // // import rootReducer from '../reducer';

// // export const store = createStore(rootReducers);

// // // export default store;

// // import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
// // import createSagaMiddleware from 'redux-saga';
// // import {createStore, applyMiddleware} from 'redux';
// // import {persistStore} from 'redux-persist';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import {persistReducer} from 'redux-persist';
// // // import { rootPersistKey } from './persistKeys';
// // // import { rootReducer } from '../reducers/rootReducer';
// // // import rootSaga from '../sagas/index';
// // import storage from 'redux-persist/lib/storage';

// // const persistConfig = {
// //   storage,
// //   key: 'root',
// //   blacklist: ['Forms', 'Modal'],
// //   version: 0,
// // };
// // const persistedRootReducer = persistReducer(persistConfig, rootReducers);

// // export default (initialState = {}) => {
// //   const sagaMiddleware = createSagaMiddleware();

// //   const store = createStore(
// //     persistedRootReducer,
// //     initialState,
// //     composeWithDevTools(applyMiddleware(sagaMiddleware)),
// //   );
// //   sagaMiddleware.run(rootSagas);

// //   const persistor = persistStore(store);
// //   store.subscribe(() => {
// //     // console.log("REDUX STATE",store.getState());
// //   });

// //   return {store, persistor};
// // };

// // const reducer = combineReducers({
// //   shoppingList: shoppingListSlice.reducer,
// //   selectedProduct: selectedShoppingProductSlice.reducer,
// // });

// import {
//   configureStore,
//   createSlice,
//   PayloadAction,
//   getDefaultMiddleware,
// } from '@reduxjs/toolkit';
// // import AsyncStorage from '@react-native-community/async-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import createSagaMiddleware from 'redux-saga';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import {rootReducers} from './rootReducers';
// import rootSagas from './rootSagas';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   // whitelist: ['shoppingListSlice'],
// };

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const persistdReducer = persistReducer(persistConfig, rootReducers);

// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];

// export const store = configureStore({
//   reducer: persistdReducer,
//   // middleware: getDefaultMiddleware({
//   //   serializableCheck: false,
//   // }),
//   middleware: getDefaultMiddleware({
//     serializableCheck: false,
//   }),
// });

// export let appPersist = persistStore(store);

// import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
// import {persistStore, persistReducer} from 'redux-persist';

// import {rootReducers} from './rootReducers';
// import rootSagas from './rootSagas';

// const devMode = process.env.NODE_ENV === 'development';

// const sagaMiddleware = createSagaMiddleware();

// const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];

// // if (devMode) {
// //   middleware.push(logger);
// // }

// export default (preloadedState = {}) => {
//   const store = configureStore({
//     reducer: rootReducers,
//     devTools: devMode,
//     middleware,
//     // preloadedState,
//   });
//   sagaMiddleware.run(rootSagas);

//   console.log('default', store);

//   // const appPersist = persistStore(store);

//   return {store};
// };

import saga from 'redux-saga';
import {all, fork} from 'redux-saga/effects';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {rootReducers} from './rootReducers';
import rootSagas from './rootSagas';
// import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

// const persistedReducer = persistReducer(persistConfig, rootReducers);

const sagaMiddleware = createSagaMiddleware();
const sagaMiddlewares = [sagaMiddleware];

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
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

// export const appPersist = persistStore(persistedReducer);
// const persistor = persistStore(persistedReducer);

// export default {store};

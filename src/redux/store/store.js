import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import createEncryptor from 'redux-persist-transform-encrypt';

import rootReducer from '../reducers/';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const encryptor = createEncryptor({
  secretKey: 'secret-key',
  onError(error) {
    // Handle the error.
    console.log('encryptor', error);
  },
});

const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['demo'],
  transforms: [encryptor],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

// Exports
export {store, persistor};

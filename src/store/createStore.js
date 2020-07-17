import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

import rootReducer from './modules/reducers/themeReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['themeReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(rootReducer);

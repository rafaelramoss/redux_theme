import React from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/es/integration/react';

import Home from './src/pages/home';
import { store, persistedStore } from './src/store/createStore';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Home />
      </PersistGate>
    </Provider>
  );
}

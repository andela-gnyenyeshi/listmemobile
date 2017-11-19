import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import configureStore from './app/store/index';
import AppWithNavigation from './app/navigation/index';

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppWithNavigation />
    </PersistGate>
  </Provider>
);

export default App;

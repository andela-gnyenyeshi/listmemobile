import { createStore, applyMiddleware } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import testMiddleware from '../middlewares/index';
import reducers from '../reducer/index';

const config = { key: 'root', storage: AsyncStorage };

const reducer = persistCombineReducers(config, reducers);

const configureStore = () => {
  const store = createStore(reducer, {}, applyMiddleware(thunk, logger));
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;

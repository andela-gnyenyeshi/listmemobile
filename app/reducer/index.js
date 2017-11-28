import navigationReducer from './navigation';
import pressReducer from '../views/Home/reducer/index';

const reducers = {
  navigation: navigationReducer,
  press: pressReducer,
};

export default reducers;

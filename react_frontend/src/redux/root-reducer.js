import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import ApplicationsReducer from './applications/applications.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  applications: ApplicationsReducer,
});

export default persistReducer(persistConfig, rootReducer);

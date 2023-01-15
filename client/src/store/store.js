import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import schoolReducer from './schoolSlice';
import staffReducer from './staffSlice';
import studentReducer from './studentSlice';

const persistConfig = {
  key: 'persist-key',
  storage,
};

const reducers = combineReducers({
  school: schoolReducer,
  staff: staffReducer,
  student: studentReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;

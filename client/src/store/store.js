import { configureStore } from '@reduxjs/toolkit';
import schoolReducer from './schoolSlice';
import staffReducer from './staffSlice';
import studentReducer from './studentSlice';

const store = configureStore({
  reducer: {
    school: schoolReducer,
    staff: staffReducer,
    student: studentReducer,
  },
});

export default store;

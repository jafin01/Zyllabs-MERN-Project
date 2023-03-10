/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  student: null,
  token: null,
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setMode: (state, action) => {
      if (action.payload.mode) {
        state.mode = action.payload.mode;
      } else {
        state.mode = state.mode === 'light' ? 'dark' : 'light';
      }
    },
    setStudentLogin: (state, action) => {
      state.student = action.payload.student;
      state.token = action.payload.token;
    },
  },
});

export const studentActions = studentSlice.actions;

export default studentSlice.reducer;

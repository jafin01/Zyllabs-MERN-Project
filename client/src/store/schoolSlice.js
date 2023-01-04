/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  school: null,
  token: null,
};

const schoolSlice = createSlice({
  name: 'schoolAuth',
  initialState,
  reducers: {
    setSchoolLogin: (state, action) => {
      state.school = action.payload.school;
      state.token = action.payload.token;
    },
    setMode: (state, action) => {
      if (action.payload.mode) {
        state.mode = action.payload.mode;
      } else {
        state.mode = state.mode === 'light' ? 'dark' : 'light';
      }
    },
  },
});

export const schoolActions = schoolSlice.actions;
export default schoolSlice.reducer;

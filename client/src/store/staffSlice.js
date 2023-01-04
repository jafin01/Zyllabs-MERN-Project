/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  staff: null,
  token: null,
};

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    setMode: (state, action) => {
      if (action.payload.mode) {
        state.mode = action.payload.mode;
      } else {
        state.mode = state.mode === 'light' ? 'dark' : 'light';
      }
    },
    setStaffLogin: (state, action) => {
      state.staff = action.payload.staff;
    },
  },
});

export const staffActions = staffSlice.actions;

export default staffSlice.reducer;

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  school: null,
  token: null,
};

const authSlice = createSlice({
  name: 'schoolAuth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.school = action.payload.school;
      state.token = action.payload.token;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

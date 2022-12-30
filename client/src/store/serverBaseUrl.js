/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const urlSlice = createSlice({
  name: 'serverBaseUrl',
  initialState: { serverBaseUrl: 'http://localhost:4040' },
  reducers: {
    urlChange: (state, action) => {
      state.serverBaseUrl = action.payload.url;
    },
  },
});

export const urlActions = urlSlice.actions;
export default urlSlice.reducer;

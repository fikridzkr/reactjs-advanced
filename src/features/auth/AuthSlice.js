import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuthenticated: false };

// reducer
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// action
export const authActions = authSlice.actions;

export default authSlice;

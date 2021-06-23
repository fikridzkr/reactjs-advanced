import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

// reducer
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// action
export const counterActions = counterSlice.actions;

export default counterSlice;

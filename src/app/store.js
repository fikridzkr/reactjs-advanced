import counterSlice from '../features/counter/CounterSlice';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/AuthSlice';

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export default store;

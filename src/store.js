import { createStore } from 'redux';
import counterReducers from './reducers/CounterReducer';

const store = createStore(counterReducers);

export default store;

import React from 'react';
import './Counter.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementHandler,
  increaseHandler,
  decrementHandler,
  toggleCounterHandler,
} from '../actions/CounterAction';
const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  return (
    <div className="counter-div">
      <h1>Counter</h1>
      {showCounter && <h5>{counter}</h5>}
      <button onClick={() => incrementHandler(dispatch)}>Tambah</button>
      <button onClick={() => increaseHandler(dispatch)}>Tambah 5</button>
      <button onClick={() => decrementHandler(dispatch)}>Kurang</button>
      <button onClick={() => toggleCounterHandler(dispatch)}>
        Toggle Counter
      </button>
    </div>
  );
};

export default Home;

import React from 'react';
import './Counter.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './CounterSlice';
const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  return (
    <div className="counter-div">
      <h1>Counter</h1>
      {showCounter && <h5>{counter}</h5>}
      <button onClick={() => incrementHandler()}>Tambah</button>
      <button onClick={() => increaseHandler()}>Tambah 5</button>
      <button onClick={() => decrementHandler()}>Kurang</button>
      <button onClick={() => toggleCounterHandler()}>Toggle Counter</button>
    </div>
  );
};

export default Home;

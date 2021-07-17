import React from 'react';
import classes from './Counter.module.css';
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
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <h5>{counter}</h5>}
      <button onClick={() => incrementHandler()}>Tambah</button>
      <button onClick={() => increaseHandler()}>Tambah 5</button>
      <button onClick={() => decrementHandler()}>Kurang</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Home;

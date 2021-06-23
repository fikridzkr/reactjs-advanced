export const incrementHandler = (dispatch) => {
  dispatch({ type: 'INCREMENT' });
};

export const increaseHandler = (dispatch) => {
  dispatch({ type: 'INCREASE', amount: 5 });
};
export const decrementHandler = (dispatch) => {
  dispatch({ type: 'DECREMENT' });
};

export const toggleCounterHandler = (dispatch) => {
  dispatch({ type: 'TOGGLE' });
};

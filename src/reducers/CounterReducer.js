export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREASE = 'INCREASE';
export const TOGGLE = 'TOGGLE';

const initialState = { counter: 0, showCounter: true };

const counterReducers = (state = initialState, action) => {
  // if bisa diganti switch
  if (action.type === INCREMENT) {
    //   FROM THIS
    // return {
    //   counter: state.counter + 1,
    //   showCounter: state.showCounter,
    // };
    // TO THIS
    state.counter++;
    return state;
  }
  if (action.type === INCREASE) {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === DECREMENT) {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === TOGGLE) {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return state;
};

export default counterReducers;

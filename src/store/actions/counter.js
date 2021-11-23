import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SHOW_SOMETHING,
  INCREMENT_START,
  DECREMENT_START,
} from "../types/counter";

export const incrementStart = () => {
  return {
    type: INCREMENT_START,
  };
};

export const decrementStart = () => {
  return {
    type: DECREMENT_START,
  };
};

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};

export const saySomethingCounter = () => {
  return {
    type: SHOW_SOMETHING,
  };
};

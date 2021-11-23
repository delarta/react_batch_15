import { SAY_HELLO, SAY_SOMETHING, SHOW_SOMETHING } from "../types/hello";

export const sayHello = () => {
  return {
    type: SAY_HELLO,
  };
};

export const saySomething = (payload) => {
  return {
    type: SAY_SOMETHING,
    payload,
  };
};

export const showSomething = () => {
  return {
    type: SHOW_SOMETHING,
  };
};

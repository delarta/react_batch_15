import {
  ADD_TO_CART,
  CHECKOUT,
  INCREASE_ITEM,
  DECREASE_ITEM,
  SET_TOTAL_PRICE,
} from "../types/cart";

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const checkout = () => {
  return {
    type: CHECKOUT,
  };
};

export const increaseItem = (id) => {
  return {
    type: INCREASE_ITEM,
    payload: { id },
  };
};

export const decreaseItem = (id) => {
  return {
    type: DECREASE_ITEM,
    payload: { id },
  };
};

export const setTotalPrice = (payload) => {
  return {
    type: SET_TOTAL_PRICE,
    payload,
  };
};

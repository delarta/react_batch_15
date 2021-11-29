import {
  ADD_TO_CART,
  CHECKOUT,
  INCREASE_ITEM,
  DECREASE_ITEM,
  SET_TOTAL_PRICE,
} from "../types/cart";
const initialState = {
  data: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART: {
      return {
        ...state,
        data: [...state.data, payload],
      };
    }
    case CHECKOUT: {
      return {
        ...state,
        data: [],
        totalPrice: 0,
      };
    }
    case INCREASE_ITEM: {
      return {
        ...state,
        data: [
          ...state.data.map((i) =>
            i.id === payload.id ? { ...i, totalItem: i.totalItem + 1 } : i
          ),
        ],
      };
    }
    case DECREASE_ITEM: {
      return {
        ...state,
        data: [
          ...state.data.map((i) =>
            i.id === payload.id ? { ...i, totalItem: i.totalItem - 1 } : i
          ),
        ],
      };
    }
    case SET_TOTAL_PRICE: {
      return {
        ...state,
        totalPrice: state.totalPrice + payload,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;

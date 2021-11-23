
import { INCREMENT_COUNTER, DECREMENT_COUNTER, SHOW_SOMETHING } from "../types/counter"

const initialState = {
  data: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return {
        ...state,
        data: state.data + 1,
      };
    }
    case DECREMENT_COUNTER: {
      return {
        ...state,
        data: state.data - 1,
      };
    }
    case SHOW_SOMETHING: {
      return {
        ...state,
        data: "SOMETHING"
      }
    }
    default:
      return state;
  }
};

export default counterReducer
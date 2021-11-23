import { SAY_HELLO, SAY_SOMETHING, SHOW_SOMETHING } from "../types/hello";

const initialState = {
  data: "HEY",
};

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAY_HELLO: {
      return {
        ...state,
        data: "Hello from redux",
      };
    }
    case SAY_SOMETHING: {
      return {
        ...state,
        data: action.payload,
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

export default helloReducer
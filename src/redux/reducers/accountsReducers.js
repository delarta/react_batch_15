const initialState = {
  data: [],
  loggedIn: localStorage.getItem("loggedIn") || false
};

export default function accountsReducers (state = initialState, action) {
  switch (action.type) {
    case "UPDATE_LOGIN_STATUS": {
      return {
        ...state,
        loggedIn: action.payload,
      };
    }
    case "GET_ACCOUNTS": {
      return {
        ...state,
        data: action.payload,
      };
    }
    case "ADD_ACCOUNT": {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case "DELETE_ACCOUNT": {
      return {
        ...state,
        data: [...state.data.filter((todo) => todo.id !== action.payload)],
      };
    }
    case "UPDATE_ACCOUNT": {
      return {
        ...state,
        data: [
          ...state.data.map((todo) =>
            todo.id === Number(action.payload.id)
              ? { ...todo, ...action.payload.data }
              : todo
          ),
        ],
      };
    }
    default:
      return state;
  }
};

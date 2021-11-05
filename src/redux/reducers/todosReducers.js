const initialState = {
  data: [],
  errorMessage: null,
  loading: false,
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case "GET_TODOS_SUCCESS": {
      return {
        ...state,
        data: action.payload,
        errorMessage: null,
      };
    }

    case "ADD_TODO_SUCCESS": {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }

    case "DELETE_TODO_SUCCESS": {
      return {
        ...state,
        data: [...state.data.filter((todo) => todo.id !== action.payload)],
      };
    }
    case "UPDATE_TODO_SUCCESS": {
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

    case "GET_TODOS_FAILED":
    case "DELETE_TODO_FAILED":
    case "UPDATE_TODO_FAILED":
    case "ADD_TODO_FAILED": {
      return {
        ...state,
        errorMessage: "Error",
      };
    }
    default:
      return state;
  }
}

const initialState = {
  data: [],
  errorMessage: "",
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TODOS_SUCCESS": {
      return {
        ...state,
        data: action.payload,
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
      console.log("UPDATE", action)
      return {
        ...state,
        data: [
          ...state.data.map((todo) =>
            todo.id === Number(action.payload.id)
              ? { ...todo, task: action.payload.data }
              : todo
          ),
        ],
      };
    }

    case "GET_TODOS_FAILED":
    case "ADD_TODO_FAILED":
    case "DELETE_TODO_FAILED":
    case "UPDATE_TODO_FAILED":
      return {
        ...state,
        errorMessage: "Error",
      };
    default:
      return state;
  }
}

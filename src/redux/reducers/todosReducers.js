const initialState = {
  data: [],
};

export default function todosReducer (state = initialState, action) {
  switch (action.type) {
    case "GET_TODOS": {
      return {
        ...state,
        data: action.payload,
      };
    }
    case "ADD_TODO": {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        data: [...state.data.filter((todo) => todo.id !== action.payload)],
      };
    }
    case "UPDATE_TODO": {
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

const initialState = {
  data: [],
  posts: [
    {
      id: 1,
      title: "json-server",
      author: "typicode",
    },
    {
      title: "Data 1",
      author: "Rudi",
      id: 2,
    },
    {
      title: "Data berikutnya",
      author: "Rudi",
      id: 3,
    },
  ],
  todos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS": {
      return {
        ...state,
        todos: action.payload,
      };
    }
    case "ADD_TODO": {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    }
    case "UPDATE_TODO": {
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) =>
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

export default rootReducer;

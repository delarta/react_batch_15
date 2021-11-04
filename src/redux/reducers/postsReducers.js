const initialState = {
  data: [
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
};

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POSTS": {
      return {
        ...state,
        data: action.payload,
      };
    }
    case "ADD_POST": {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case "DELETE_POST": {
      return {
        ...state,
        data: [...state.data.filter((post) => post.id !== action.payload)],
      };
    }
    case "UPDATE_POST": {
      return {
        ...state,
        data: [
          ...state.data.map((post) =>
            post.id === Number(action.payload.id)
              ? { ...post, ...action.payload.data }
              : post
          ),
        ],
      };
    }
    default:
      return state;
  }
}

export default postsReducer;

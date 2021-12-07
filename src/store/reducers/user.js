const initialState = {
  data: {
    username: "Mail",
    email: "mail@mail.com",
    role: "merchant"
  },
  role: "merchant / customer"
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_LOGIN": {
      return {
        ...state,
        data: [...state.data, payload],
      };
    }
    default:
      return state;
  }
};

export default cartReducer;

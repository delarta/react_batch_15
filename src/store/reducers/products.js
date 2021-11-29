import { UPDATE_STOCK } from "../types/products";
const initialState = {
  data: [
    {
      id: 1,
      name: "Guitar",
      price: 4000,
      stock: 100,
      image:
        "https://www.musicca.com/files/scripts/drumkit/static/media/drum-kit.eb6cdcf0.png",
    },
    {
      id: 2,
      name: "Drum",
      price: 20000,
      stock: 100,
      image:
        "https://www.musicca.com/files/scripts/drumkit/static/media/drum-kit.eb6cdcf0.png",
    },
    {
      id: 3,
      name: "Bass",
      price: 5431,
      stock: 100,
      image:
        "https://www.musicca.com/files/scripts/drumkit/static/media/drum-kit.eb6cdcf0.png",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 8000,
      stock: 100,
      image:
        "https://www.musicca.com/files/scripts/drumkit/static/media/drum-kit.eb6cdcf0.png",
    },
  ],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_STOCK: {
      return {
        ...state,
        data: [
          ...state.data.map((p) => {
            const productInCart = payload.find((c) => c.id === p.id);
            if (productInCart) {
              return {
                ...p,
                stock: p.stock - productInCart.totalItem,
              };
            } else {
              return p;
            }
          }),
        ],
      };
    }

    default:
      return state;
  }
};

export default productsReducer;

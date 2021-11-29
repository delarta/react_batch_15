import { UPDATE_STOCK } from "../types/products";

export const updateStock = (payload) => {
  return {
    type: UPDATE_STOCK,
    payload,
  };
};

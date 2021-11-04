export const addAccount = (data) => {
  return {
    type: "ADD_ACCOUNT",
    payload: data,
  };
};

export const getAccounts = (data) => {
  return {
    type: "GET_ACCOUNTS",
    payload: data,
  };
};

export const deleteAccount = (todoId) => {
  return { type: "DELETE_ACCOUNT", payload: todoId };
};

export const updateAccount = (data, id) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: { data, id },
  };
};

export const updateLoginStatus = (status) => {
  return {
    type: "UPDATE_LOGIN_STATUS",
    payload: status,
  };
};

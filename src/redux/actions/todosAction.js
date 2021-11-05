export const addTodoStart = (data) => {
  return {
    type: "ADD_TODO_START",
    payload: data,
  };
};

export const getTodosStart = () => {
  return {
    type: "GET_TODOS_START"
  };
};

export const deleteTodoStart = (todoId) => {
  return { type: "DELETE_TODO_START", payload: todoId };
};

export const updateTodoStart = (data, id) => {
  return {
    type: "UPDATE_TODO_START",
    payload: { data, id },
  };
};
export const addTodoSuccess = (data) => {
  return {
    type: "ADD_TODO_SUCCESS",
    payload: data,
  };
};

export const getTodosSuccess = (data) => {
  return {
    type: "GET_TODOS_SUCCESS",
    payload: data,
  };
};

export const deleteTodoSuccess = (todoId) => {
  return { type: "DELETE_TODO_SUCCESS", payload: todoId };
};

export const updateTodoSuccess = (data, id) => {
  return {
    type: "UPDATE_TODO_SUCCESS",
    payload: { data, id },
  };
};

export const addTodoFailed = () => {
  return {
    type: "ADD_TODO_FAILED",
  };
};

export const getTodosFailed = () => {
  return {
    type: "GET_TODOS_FAILED",
  };
};

export const deleteTodoFailed = () => {
  return { type: "DELETE_TODO_FAILED" };
};

export const updateTodoFailed = () => {
  return {
    type: "UPDATE_TODO_FAILED",
  };
};

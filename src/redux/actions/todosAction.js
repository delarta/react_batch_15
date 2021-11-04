export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: data,
  };
};

export const getTodos = (data) => {
  return {
    type: "GET_TODOS",
    payload: data,
  };
};

export const deleteTodo = (todoId) => {
  return { type: "DELETE_TODO", payload: todoId };
};

export const updateTodo = (data, id) => {
  return {
    type: "UPDATE_TODO",
    payload: { data, id },
  };
};

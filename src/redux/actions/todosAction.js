import axios from "axios";

const url = "http://localhost:3004/todolist";

export const getTodos = () => {
  return async (dispatch) => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const response = await axios(url);
      dispatch({
        type: "GET_TODOS_SUCCESS",
        payload: response.data,
      });

      dispatch({ type: "SET_LOADING", payload: false });
    } catch (error) {
      dispatch({
        type: "GET_TODOS_FAILED",
      });
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };
};

export const addTodo = (taskName) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(url, {
        task: taskName,
      });
      dispatch({ type: "ADD_TODO_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "ADD_TODO_FAILED" });
      alert("Error when adding a task");
    }
  };
};

export const deleteTodo = (todoId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${url}/${todoId}`);
      dispatch({ type: "DELETE_TODO_SUCCESS", payload: todoId });
    } catch (error) {
      dispatch({ type: "DELETE_TODO_FAILED" });
      alert("Failed to delete task");
    }
  };
};

export const updateTodo = (updatedName, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${url}/${id}`, {
        id: Number(id),
        task: updatedName,
      });
      dispatch({
        type: "UPDATE_TODO_SUCCESS",
        payload: { data: response.data, id: Number(id) },
      });
    } catch (error) {
      alert("Update Failed!");
    }
  };
};

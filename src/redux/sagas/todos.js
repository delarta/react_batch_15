import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";

import { addTodo, getTodos, deleteTodo, updateTodo } from "../../apis/todos";
import {
  addTodoSuccess,
  deleteTodoSuccess,
  getTodosSuccess,
  updateTodoStart,
  updateTodoSuccess,
} from "../actions/todosAction";

export function* GET_TODOS() {
  try {
    const response = yield call(getTodos);

    if (response) {
      yield put(getTodosSuccess(response));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* ADD_TODO({ payload }) {
  try {
    const response = yield call(addTodo, payload);

    if (response) {
      yield put(addTodoSuccess(response));
    }
  } catch (error) {
    console.log(error);
  }
}
export function* DELETE_TODO({ payload }) {
  try {
    const response = yield call(deleteTodo, payload);

    if (response) {
      yield put(deleteTodoSuccess(payload));
    }
  } catch (error) {
    console.log(error);
  }
}
export function* UPDATE_TODO({ payload: { data, id } }) {
  try {
    const response = yield call(updateTodo, data, id);

    if (response) {
      yield put(updateTodoSuccess(data, id));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* todosSaga() {
  yield all([
    takeEvery("DELETE_TODO_START", DELETE_TODO),
    takeLatest("GET_TODOS_START", GET_TODOS),
    takeLatest("ADD_TODO_START", ADD_TODO),
    takeLatest("UPDATE_TODO_START", UPDATE_TODO),
  ]);
}

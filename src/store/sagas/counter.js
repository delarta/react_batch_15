import { takeEvery, put, all, delay, takeLatest } from "redux-saga/effects";
import { DECREMENT_START, INCREMENT_START } from "../types/counter";
import { decrementCounter, incrementCounter } from "../actions/counter";

export function* increment() {
  yield delay(3000)
  yield put(incrementCounter());
}

export function* decrement() {
  yield delay(3000)
  yield put(decrementCounter());
}

export default function* sagas() {
  yield all([
    takeLatest(INCREMENT_START, increment),
    takeEvery(DECREMENT_START, decrement),
  ]);
}

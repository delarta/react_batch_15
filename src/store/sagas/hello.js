import { put, all, delay, takeLatest } from "redux-saga/effects";
import { SHOW_SOMETHING_START} from "../types/hello";
import { showSomething } from "../actions/hello";

export function* show() {
  yield delay(2000)
  yield put(showSomething());
}

export default function* helloSagas() {
  yield all([
    takeLatest(SHOW_SOMETHING_START, show),
  ]);
}

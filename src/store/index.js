import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeSetup =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  rootReducer,
  composeSetup(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

export default store;

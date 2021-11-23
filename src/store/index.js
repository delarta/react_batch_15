import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;

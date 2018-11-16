import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootrReducers from "./reducers";
import rootSagas from "./sagas";

import { composeWithDevTools } from 'redux-devtools-extension';
const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    rootrReducers,
    compose(
        applyMiddleware(sagaMiddleware),
        composeWithDevTools()
    )
);

sagaMiddleware.run(rootSagas);

export default store
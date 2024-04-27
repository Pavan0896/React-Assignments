import { applyMiddleware, legacy_createStore } from "redux";
import reducers from "./reducers";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const store = legacy_createStore(reducers,applyMiddleware(thunk,logger))

export default store;
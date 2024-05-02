import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import reducer from "./reducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    quiz: reducer,
    auth: authReducer
}
  
)

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk, logger))
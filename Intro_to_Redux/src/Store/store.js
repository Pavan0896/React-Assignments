import { combineReducers, legacy_createStore } from "redux";
import { themeReducer, countReducer } from "./reducer";

const rootReducer = combineReducers({
    theme:themeReducer,
    count:countReducer
})
export const store = legacy_createStore(rootReducer)
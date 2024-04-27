import { combineReducers, legacy_createStore } from "redux";
import {todoReducer, matchReducer} from "./reducer";

const rootReducer = combineReducers({
    todo:todoReducer,
    match:matchReducer
})

const store = legacy_createStore(rootReducer)  
export default store
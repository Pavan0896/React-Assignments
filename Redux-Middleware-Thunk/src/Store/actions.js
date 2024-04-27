import { ERROR, FETCH, SUCCESS } from "./actionTypes"

const fetchAction = ()=>{
    return {type:FETCH}
}

const successAction = (payload)=>{
    return {type:SUCCESS, payload:payload}
}

const errorAction = ()=>{
    return {type:ERROR}
}

export {fetchAction, successAction, errorAction};
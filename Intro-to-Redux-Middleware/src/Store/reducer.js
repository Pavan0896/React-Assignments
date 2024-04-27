import { ADD, SUBMIT } from "./actionTypes"

const initState = {task:""}

const reducer = (state=initState, action)=>{
    switch(action.type){
        case ADD : return {...state, task: action.payload};
        case SUBMIT : return initState;
        default : return state
    }

}

export default reducer
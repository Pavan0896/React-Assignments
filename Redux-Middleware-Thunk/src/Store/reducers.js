import { ERROR, FETCH, SUCCESS } from "./actionTypes";

const initState = {data:{}, isLoading:false, isError:false}
const reducers = (state=initState, action) => {
 switch(action.type){
    case FETCH : return {...state, isLoading:true};
    case SUCCESS : return {...state, isLoading:false, data:action.payload};
    case ERROR : return {...state, isError:true};
    default : return state;
 }
}

export default reducers

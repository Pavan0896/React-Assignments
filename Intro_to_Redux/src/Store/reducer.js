export const themeReducer = (state=false, action)=>{
    switch(action.type){
        case "LIGHT" : return false;
        case "DARK" : return true;
        default : return state
    }
}

export const countReducer = (state=0, action)=>{
    switch(action.type){
        case "ADD" : return state+1;
        case "SUBTRACT" : return state-1;
        default : return state
    }
}
import { FETCH, SKIP, SUBMIT } from "./actionTypes";

let initState = { questions: [], score: 0 };

const reducer = (state=initState, action) => {
  switch (action.type) {
    case FETCH:
      return {...state, questions:action.payload};
      case SUBMIT : {
        if(state.questions[0].correctOptionIndex == action.payload){
            
            return {...state, score:state.score+1}
        } else {
            console.log("answer",state.questions[0].correctOptionIndex)
            return {...state, score:state.score}
        }
      }
      case SKIP : return {...state}
    default:
      return state;
  }
};

export default reducer;

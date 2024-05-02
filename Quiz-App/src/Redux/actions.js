import { FAIL, FETCH, SKIP, SUBMIT, SUCCESS } from "./actionTypes";

export const fetchAction = (num) => {
  return async (dispatch) => {
    try {
      let res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz?limit=1&page=${num}`
      );
      let data = await res.json();
      return dispatch({ type: FETCH, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const submitAction = (option)=>{
    return (dispatch)=>{
        dispatch({type:SUBMIT, payload:+option});
    }
}

export const skipAction = ()=>{
    return (dispatch)=>{
        dispatch({type:SKIP})
    }
}

export const successAction = ()=>{
    return (dispatch)=>{
        dispatch({type:SUCCESS})
    }
}

export const failAction = ()=>{
    return (dispatch)=>{
        dispatch({type:FAIL})
    }
}
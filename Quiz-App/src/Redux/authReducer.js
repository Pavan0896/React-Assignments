import { FAIL, SUCCESS } from "./actionTypes";

const initState = { isAuthenticated: false };

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SUCCESS:
      return { ...state, isAuthenticated: true };
    case FAIL:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;

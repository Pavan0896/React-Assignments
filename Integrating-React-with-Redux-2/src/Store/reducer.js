const initState = { title: "", status: false, id: 0 };

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD": {
      let newState = { ...initState, title: action.payload, id: action.count };
      return [...state, { ...newState }];
    }
    case "STATUS": {
      let newState = [...state];
      newState[action.id].status = !newState[action.id].status;
      return [...newState];
    }
    case "DELETE": {
      let newState = [...state];
      newState.splice(action.id, 1);
      return [...newState];
    }
    default:
      return state;
  }
};

const initialState = { isLoading: false, isError: false, footballMatches: [] };

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET" : return {...state, footballMatches:action.payload, isLoading:true}
    default:
      return state;
  }
};

export { todoReducer, matchReducer };

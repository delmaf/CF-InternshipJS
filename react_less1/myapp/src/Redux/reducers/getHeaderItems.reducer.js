import { GET_HEADER } from "../action.typeVar";

let initialState = {
  headerItems: [],
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HEADER:
      return { ...state, headerItems: action.payload };
    default:
      return state;
  }
};

export default headerReducer;

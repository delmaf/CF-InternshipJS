import { GET_CONTENT } from "../action.typeVar";

let initialState = {
  contentItems: [],
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return { ...state, contentItems: action.payload };
    default:
      return state;
  }
};

export default contentReducer;

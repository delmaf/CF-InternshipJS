import { GET_FOOTER } from "../action.typeVar";

let initialState = {
  footerItems: [],
};

const footerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOOTER:
      return { ...state, footerItems: action.payload };
    default:
      return state;
  }
};

export default footerReducer;

import { GET_PARTNERS } from "../action.typeVar";

let initialState = {
  partners: [],
};

const getPartnersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PARTNERS:
      return { ...state, partners: action.payload };
    default:
      return state;
  }
};

export default getPartnersReducer;

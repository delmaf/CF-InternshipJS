import { GET_CONTACTS } from "../action.typeVar";

let initialState = {
  contacts: [],
};

const getContactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
};

export default getContactsReducer;

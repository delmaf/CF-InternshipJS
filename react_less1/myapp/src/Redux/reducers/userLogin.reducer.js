import { GET_USER } from "../action.typeVar";

let initialState = {
  userLogin: [],
};

const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, userLogin: action.payload };
    default:
      return state;
  }
};

export default userLoginReducer;

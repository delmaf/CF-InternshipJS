import { api } from "../../utils/ApiService";
import { GET_CONTENT } from "../action.typeVar";

export const getContentItems = (url) => {
  return async (dispatch) => {
    const data = await api.get(url);
    dispatch({ type: GET_CONTENT, payload: data });
  };
};

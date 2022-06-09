import { api } from "../../utils/ApiService";
import { GET_HEADER } from "../action.typeVar";

export const getHeaderItems = (url) => {
  return async (dispatch) => {
    const data = await api.get(url);
    dispatch({ type: GET_HEADER, payload: data });
  };
};

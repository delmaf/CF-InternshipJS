import { api } from "../../utils/ApiService";
import { GET_PARTNERS } from "../action.typeVar";

export const getPartners = (url) => {
  return async (dispatch) => {
    const data = await api.get(url);
    dispatch({ type: GET_PARTNERS, payload: data });
  };
};

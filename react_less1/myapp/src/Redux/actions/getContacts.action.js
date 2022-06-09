import { api } from "../../utils/ApiService";
import { GET_CONTACTS } from "../action.typeVar";

export const getContacts = (url) => {
  return async (dispatch) => {
    const data = await api.get(url);
    dispatch({ type: GET_CONTACTS, payload: data });
  };
};

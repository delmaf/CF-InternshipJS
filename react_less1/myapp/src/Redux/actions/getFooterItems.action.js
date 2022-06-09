import { api } from "../../utils/ApiService";
import { GET_FOOTER } from "../action.typeVar";

export const getFooterItems = () => {
  return async (dispatch) => {
    const data = await api.get("http://localhost:8081/api/footer");
    dispatch({ type: GET_FOOTER, payload: data });
  };
};

import { api } from "../../utils/ApiService";
import { GET_USER } from "../action.typeVar";

export const userLoginAction = (url, header, body, home) => {
  return async (dispatch) => {
    const data = await api.post(url, header, body);
    console.log(data);
    if (data.status == 201) {
      localStorage.setItem(
        "user",
        JSON.stringify({ token: data.accessToken, name: data.username })
      );
    }
    home("/");
    setTimeout(() => {
      location.reload();
    }, 2);
    await dispatch({ type: GET_USER, payload: data });
  };
};

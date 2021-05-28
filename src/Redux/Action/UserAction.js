import { LOGIN } from "../Constants";

export function loginAction(user) {
  return async function (dispatch) {
    let res = await fetch("url");
    let data = await res.json();
    return {
      type: LOGIN,
      payload: data,
    };
  };
}

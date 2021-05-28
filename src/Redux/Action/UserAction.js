import { LOGIN } from "../Constants";

export function loginAction(user) {
  console.log("hii");
  return async (dispatch) => {
    try {
      let res = await fetch(
        "https://run.mocky.io/v3/5d0dd324-06af-46e5-91fc-2c8a01de06ea",
        {
          method: "POST",
        }
      );
      console.log(res);
      let data = await res.json();

      console.log(data);
      return dispatch({ type: LOGIN, payload: data });
    } catch {
      console.log("error");
    }
  };
}

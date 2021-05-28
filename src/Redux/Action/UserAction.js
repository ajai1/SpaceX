import { LOGIN } from "../Constants";

export function loginAction(user) {
  console.log("hii");
  return async (dispatch) => {
    try {
      let res = await fetch(
      "https://run.mocky.io/v3/fa7e7fb5-5a50-4b13-a8c2-38fad332566a",
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: {user}
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

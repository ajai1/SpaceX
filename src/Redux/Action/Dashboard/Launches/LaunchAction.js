import { LAUNCHES } from "../../../Constants";

export function fetchData(limit) {
  return async (dispatch) => {
    try {
      let res = await fetch(
        `https://api.spacexdata.com/v3/launches?limit=5&offset=${limit}`
      );
      let data = await res.json();
      console.log(data);
      return dispatch({
        type: LAUNCHES,
        payload: data,
      });
    } catch {
      console.log("error");
    }
  };
}

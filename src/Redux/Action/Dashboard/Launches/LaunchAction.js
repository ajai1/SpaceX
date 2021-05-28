const LAUNCHES = "Launches";
const SHIPS = "Ships";
const ROCKETS = "Rockets";

export function fetchData(action) {
  console.log("hiii");
  return async (dispatch) => {
    console.log("action");
    try {
      let res = await fetch("https://api.spacexdata.com/v3/launches");
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

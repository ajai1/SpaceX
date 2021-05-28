import { PAGE } from "../../Constants";

export function dashboardPage(item) {
  console.log(item);
  return {
    type: PAGE,
    payload: item.toUpperCase(),
  };
}

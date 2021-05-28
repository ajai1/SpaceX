import { combineReducers } from "redux";
import { LaunchReducer } from "./Dashboard/Launches/LaunchReducer";

export const rootReducer = combineReducers({ LaunchReducer });

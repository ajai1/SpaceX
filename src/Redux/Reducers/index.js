import { combineReducers } from "redux";
import { LaunchReducer } from "./Dashboard/Launches/LaunchReducer";
import { DashboardReducer } from "./Dashboard/DashboardReducer";

export const rootReducer = combineReducers({ LaunchReducer, DashboardReducer });

import { combineReducers } from "redux";
import { LaunchReducer } from "./Dashboard/Launches/LaunchReducer";
import { DashboardReducer } from "./Dashboard/DashboardReducer";
import { NavReducer } from "./NavReducer";

export const rootReducer = combineReducers({NavReducer, LaunchReducer, DashboardReducer });

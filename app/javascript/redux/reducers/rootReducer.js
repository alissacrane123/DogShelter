import { combineReducers } from "redux";

import session from "./sessionReducer";
import dogs from "./dogReducer";
import ui from './uiReducer'

const rootReducer = combineReducers({
  dogs,
	session,
  ui
});

export default rootReducer;

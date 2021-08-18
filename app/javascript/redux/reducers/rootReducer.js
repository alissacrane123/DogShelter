import { combineReducers } from "redux";

import session from "./sessionReducer";
import dogs from "./dogReducer";

const rootReducer = combineReducers({
  dogs,
	session,
});

export default rootReducer;

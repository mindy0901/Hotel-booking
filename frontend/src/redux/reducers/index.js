import { combineReducers } from "redux";

import authReducer from "./authReducer";
import hotelsReducer from "./hotelsReducer";
import searchReducer from "./searchReducer";
import roomsReducer from "./roomsReducer";

export const rootReducer = combineReducers({
      authReducer,
      hotelsReducer,
      roomsReducer,
      searchReducer,
});

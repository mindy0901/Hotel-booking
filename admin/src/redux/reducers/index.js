import { combineReducers } from "redux";

import authReducer from "./authReducer";
import hotelReducer from "./hotelReducer";
import roomsReducer from "./roomsReducer";
import modeReducer from "./modeReducer";
import dataReducer from "./dataReducer";

export const rootReducer = combineReducers({
      authReducer,
      hotelReducer,
      roomsReducer,
      modeReducer,
      dataReducer,
});

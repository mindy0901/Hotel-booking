import { UPDATE_ROOM } from "../constantsType/actionType";

const initialState = {
      roomNumbers: [{
            unavailableDates: []
      }],
}

const roomsReducer = (state = initialState, action) => {
      switch (action.type) {
            case UPDATE_ROOM:
                  return {
                        ...state,
                        roomNumbers: {
                              ...state.roomNumbers,
                              unavailableDates: action.payload,
                        }
                  }
            default:
                  return state;
      }
};

export default roomsReducer;
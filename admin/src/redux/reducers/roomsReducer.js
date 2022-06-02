import { CREATE_ROOM, FETCH_ROOMS, ROOM_START_LOADING, UPDATE_ROOM } from "../constantsType/actionType";

const initialState = {
      rooms: [],
      room: {},
      loading: false
}

const roomsReducer = (state = initialState, action) => {
      switch (action.type) {
            case ROOM_START_LOADING:
                  return {
                        ...state,
                        loading: true
                  }
            case FETCH_ROOMS:
                  return {
                        ...state,
                        rooms: action.payload,
                        loading: false
                  }
            case CREATE_ROOM:
                  return {
                        ...state,
                        room: action.payload,
                        loading: false
                  }
            default:
                  return state;
      }
};

export default roomsReducer;
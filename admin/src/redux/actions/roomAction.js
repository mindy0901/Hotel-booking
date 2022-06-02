import { createRoomAxios, fetchRooms } from "../../api";
import { CREATE_ROOM, FETCH_ROOMS, ROOM_START_LOADING } from "../constantsType/actionType";

export const showRooms = () => async (dispatch) => {
      try {
            dispatch({ type: ROOM_START_LOADING })
            const res = await fetchRooms();
            dispatch({ type: FETCH_ROOMS, payload: res.data })
      } catch (error) {
            console.log(error);
      }
}

export const createRoom = (hotelId, form, navigate) => async (dispatch) => {
      try {
            dispatch({ type: ROOM_START_LOADING })
            const res = await createRoomAxios(hotelId, form);
            dispatch({ type: CREATE_ROOM, payload: res.data })
            navigate("/rooms")
      } catch (error) {
            console.log(error)
      }
}
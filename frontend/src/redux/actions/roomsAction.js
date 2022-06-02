import { updateRoomAvailability } from "../../api";
import { UPDATE_ROOM } from "../constantsType/actionType";

export const setRoomUnvailable = (roomId, bookedDates) => async (dispatch) => {
      try {
            const res = await updateRoomAvailability(roomId, bookedDates);
            dispatch({ type: UPDATE_ROOM, payload: res.data })
      } catch (error) {
            console.log(error);
      }
}
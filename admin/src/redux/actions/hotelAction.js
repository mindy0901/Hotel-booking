import { createHotelAxios, fetchHotels } from "../../api";
import { CREATE_HOTEL, FETCH_HOTELS, HOTEL_START_LOADING } from "../constantsType/actionType";

export const showHotels = () => async (dispatch) => {
      try {
            dispatch({ type: HOTEL_START_LOADING })
            const res = await fetchHotels();
            dispatch({ type: FETCH_HOTELS, payload: res.data });
      } catch (error) {
            console.log(error);
      }
};

export const createHotel = (form, navigate) => async (dispatch) => {
      try {
            dispatch({ type: HOTEL_START_LOADING })
            const res = await createHotelAxios(form);
            dispatch({ type: CREATE_HOTEL, payload: res.data });
            navigate("/hotels")
      } catch (error) {
            console.log(error);
      }
};
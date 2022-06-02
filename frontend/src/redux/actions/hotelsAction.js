import {
      fetchHotelById,
      fetchHotelRooms,
      fetchHotelsBySearch,
      fetchHotelsCountByCity, fetchHotelsCountByType, fetchMostBookedHotels
} from "../../api";
import {
      FETCH_ALL, FETCH_HOTEL, FETCH_HOTELS_COUNT_BY_CITY, FETCH_HOTELS_COUNT_BY_TYPE, FETCH_HOTEL_ROOMS,
} from "../constantsType/actionType";


export const showMostBookedHotels = () => async (dispatch) => {
      try {
            const res = await fetchMostBookedHotels();
            dispatch({ type: FETCH_ALL, payload: res.data })
      } catch (error) {
            console.log(error);
      }
}

export const showHotelDetails = (id) => async (dispatch) => {
      try {
            const res = await fetchHotelById(id);
            dispatch({ type: FETCH_HOTEL, payload: res.data })
      } catch (error) {
            console.log(error);
      }
}

export const showSearchResults = (query) => async (dispatch) => {
      try {
            const res = await fetchHotelsBySearch(query);
            dispatch({ type: FETCH_ALL, payload: res.data })
      } catch (error) {
            console.log(error);
      }
}

export const showHotelsCountByCity = (cities) => async (dispatch) => {
      try {
            const res = await fetchHotelsCountByCity(cities);
            dispatch({ type: FETCH_HOTELS_COUNT_BY_CITY, payload: res.data })
      } catch (error) {
            console.log(error);
      }
}

export const showHotelsCountByType = () => async (dispatch) => {
      try {
            const res = await fetchHotelsCountByType();
            dispatch({ type: FETCH_HOTELS_COUNT_BY_TYPE, payload: res.data })
      } catch (error) {
            console.log(error);
      }
}

export const showHotelRooms = (id) => async (dispatch) => {
      try {
            const res = await fetchHotelRooms(id);
            dispatch({ type: FETCH_HOTEL_ROOMS, payload: res.data })
      } catch (error) {
            console.log(error);
      }
}







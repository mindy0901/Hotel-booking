import { FETCH_ALL, FETCH_HOTEL, FETCH_HOTELS_COUNT_BY_CITY, FETCH_HOTELS_COUNT_BY_TYPE, FETCH_HOTEL_ROOMS } from "../constantsType/actionType";

const initialState = {
      hotels: [],
      hotel: {},
      countByCity: [],
      countByType: [],
}

const hotelsReducer = (state = initialState, action) => {
      switch (action.type) {
            case FETCH_ALL:
                  return {
                        ...state,
                        hotels: action.payload
                  };
            case FETCH_HOTEL:
                  return {
                        ...state,
                        hotel: action.payload
                  }
            case FETCH_HOTEL_ROOMS:
                  return {
                        ...state,
                        hotel: {
                              ...state.hotel,
                              rooms: action.payload
                        }
                  }
            case FETCH_HOTELS_COUNT_BY_CITY:
                  return {
                        ...state,
                        countByCity: action.payload
                  }
            case FETCH_HOTELS_COUNT_BY_TYPE:
                  return {
                        ...state,
                        countByType: action.payload
                  }
            default:
                  return state;
      }
};

export default hotelsReducer;
import { CREATE_HOTEL, FETCH_HOTEL, FETCH_HOTELS, HOTEL_START_LOADING, } from "../constantsType/actionType";

const initialState = {
      hotels: [],
      hotel: {},
      loading: false
}

const hotelReducer = (state = initialState, action) => {
      switch (action.type) {
            case HOTEL_START_LOADING:
                  return {
                        ...state,
                        loading: true,
                  }
            case FETCH_HOTELS:
                  return {
                        ...state,
                        hotels: action.payload,
                        loading: false,
                  }
            case FETCH_HOTEL:
                  return {
                        ...state,
                        hotel: action.payload,
                        loading: false
                  };
            case CREATE_HOTEL:
                  return {
                        ...state,
                        hotel: action.payload,
                        loading: false
                  }
            default:
                  return state;
      }
};

export default hotelReducer;
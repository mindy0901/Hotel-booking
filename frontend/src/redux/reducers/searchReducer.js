import { NEW_SEARCH, RESET_SEARCH } from "../constantsType/actionType";

const initialState = {
      country: undefined,
      date: [],
      options: {
            adults: undefined,
            children: undefined,
            rooms: undefined,
      },
};

const searchReducer = (state = initialState, action) => {
      switch (action.type) {
            case NEW_SEARCH:
                  return action.payload
            case RESET_SEARCH:
                  return initialState;
            default:
                  return state;
      }
};

export default searchReducer;
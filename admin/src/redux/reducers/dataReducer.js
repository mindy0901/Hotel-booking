import { DATA_START_LOADING, DELETE_DATA_BY_PATH, FETCH_DATA_BY_PATH } from "../constantsType/actionType";

const initialState = {
      datas: [],
      loading: false,
}

const dataReducer = (state = initialState, action) => {
      switch (action.type) {
            case DATA_START_LOADING:
                  return { ...state, loading: true };
            case FETCH_DATA_BY_PATH:
                  return {
                        ...state,
                        datas: action.payload,
                        loading: false
                  };
            case DELETE_DATA_BY_PATH:
                  return {
                        ...state,
                        datas: state.datas.filter((data) => data._id !== action.payload)
                  };
            default:
                  return state;
      }
};

export default dataReducer;
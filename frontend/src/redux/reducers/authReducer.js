import { AUTH, LOGOUT } from "../constantsType/actionType";

const initialState = {
      user: null,
      loading: false,
      error: null,
};

const authReducer = (state = initialState, action) => {
      switch (action.type) {
            case AUTH:
                  localStorage.setItem('user', JSON.stringify(action.payload));
                  return {
                        ...state,
                        user: action.payload,
                        loading: false,
                        errors: null
                  };
            case LOGOUT:
                  localStorage.clear();
                  return {
                        ...state,
                        user: null,
                        loading: false,
                        errors: null
                  };
            default:
                  return state;
      }
};

export default authReducer;
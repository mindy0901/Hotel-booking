import { AUTH, AUTH_FAILURE, AUTH_START, LOGOUT } from "../constantsType/actionType";

const initialState = {
      user: JSON.parse(localStorage.getItem("user")) || null,
      loading: false,
      error: null,
};

const authReducer = (state = initialState, action) => {
      switch (action.type) {
            case AUTH_START:
                  return {
                        ...state,
                        user: null,
                        loading: true,
                        error: null,
                  };
            case AUTH:
                  localStorage.setItem('user', JSON.stringify(action.payload));
                  return {
                        ...state,
                        user: action.payload,
                        loading: false,
                        errors: null
                  };
            case AUTH_FAILURE:
                  return {
                        ...state,
                        user: null,
                        loading: false,
                        error: action.payload,
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
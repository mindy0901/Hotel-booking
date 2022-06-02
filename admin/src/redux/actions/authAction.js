import { authSignIn, authSignUp } from "../../api";
import { AUTH, AUTH_FAILURE, AUTH_START } from "../constantsType/actionType";

export const signIn = (form, navigate) => async (dispatch) => {
      try {
            dispatch({ type: AUTH_START });
            const res = await authSignIn(form);
            dispatch({ type: AUTH, payload: res.data.details });
            navigate("/");
      } catch (error) {
            dispatch({ type: AUTH_FAILURE, payload: error })
      }
};

export const signUp = (form, navigate) => async (dispatch) => {
      try {
            await authSignUp(form);
            navigate("/")
      } catch (error) {
      }
};

import { authSignIn, authSignUp } from "../../api";
import { AUTH } from "../constantsType/actionType";

export const signIn = (form, navigate) => async (dispatch) => {
      try {
            const res = await authSignIn(form);
            dispatch({ type: AUTH, payload: res.data.details });
            navigate("/");
      } catch (error) {
            console.log(error)
      }
};

export const signUp = (form, navigate) => async (dispatch) => {
      try {
            const res = await authSignUp(form);
            dispatch({ type: AUTH, payload: res.data });
            navigate("/")
      } catch (error) {
            console.log(error)
      }
};

import { delDataByPath, fetchDataByPath } from "../../api";
import { DATA_START_LOADING, DELETE_DATA_BY_PATH, FETCH_DATA_BY_PATH } from "../constantsType/actionType";

export const getDataByPath = (path) => async (dispatch) => {
      try {
            dispatch({ type: DATA_START_LOADING });
            const res = await fetchDataByPath(path);
            dispatch({ type: FETCH_DATA_BY_PATH, payload: res.data });
      } catch (error) {
            console.log(error);
      }
};

export const deleteDataByPath = (path, id) => async (dispatch) => {
      try {
            await delDataByPath(path, id);
            dispatch({ type: DELETE_DATA_BY_PATH, payload: id });
      } catch (error) {
            console.log(error)
      }
}
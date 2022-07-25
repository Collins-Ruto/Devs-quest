
import * as api from "../api";

export const getCollabs = (type) => async (dispatch) => {
  try {
    const { data } = await api.getCollabs();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCollab = (forum) => async (dispatch) => {
  try {
    const { data } = await api.createCollab(forum);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
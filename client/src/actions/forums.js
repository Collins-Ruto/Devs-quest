import * as api from "../api";

export const getForums = () => async (dispatch) => {
  try {
    const { data } = await api.getForums();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createForum = (forum) => async (dispatch) => {
  try {
    const { data } = await api.createForum(forum);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
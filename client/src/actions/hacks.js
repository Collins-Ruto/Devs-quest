import * as api from "../api";

export const getHacks = (type) => async (dispatch) => {
  try {
    const { data } = await api.getHacks();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createHack = (hack) => async (dispatch) => {
  try {
    const { data } = await api.createHack(hack);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

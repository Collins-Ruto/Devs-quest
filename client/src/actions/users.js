import * as api from "../api";

export const getUsers = (type) => async (dispatch) => {
  try {
    const { data } = await api.getUsers();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

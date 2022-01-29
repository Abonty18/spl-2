import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';




export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
    
  } catch (error) {
    console.log("An error occured while ");
    const errMsg =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: "ERROR", data: errMsg });
    console.log(errMsg);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  }catch (error) {
    console.log("An error occured while ");
    const errMsg =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: "ERROR", data: errMsg });
    console.log(errMsg);
    
  }
};

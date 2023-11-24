import { GET_DATA, LOGIN } from "./actionType";
const BASE_URL = "http://localhost:3000/users";
import axios from "axios";
import swal from "../../helpers/swal";

export function setData(data) {
  return {
    type: GET_DATA,
    payload: data,
  };
}

export function getData() {
  return async (dispatch) => {
    try {
      const response = await axios.get(BASE_URL);
      dispatch({
        type: GET_DATA,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function login(user) {
  return async (dispatch) => {
    try {
      const response = await axios.post(BASE_URL + "/login", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status >= 200 && response.status < 300) {
        const loginData = response.data;
        dispatch({
          type: LOGIN,
          payload: loginData,
        });
        swal("success", "Welcome to the App!", "success");
        return loginData; 
      } else {
        swal(
          "error",
          "401 - UNAUTHORIZED",
          "error"
        );
        return null; 
      }
    } catch (error) {
      console.error(error);
      swal("error", "401 - UNAUTHORIZED", "error");
      throw error; 
    }
  };
}

import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  LOGOUT,
} from "./actionTypes";
import { loadData, saveData } from "../localStorage";


export const initState = {
  userData: loadData("userData") || [],
  err: "",
  auth: loadData("auth") || false
};


const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        err: "",
      };

    case LOGIN_SUCCESS:
      saveData("userData", action.payload);
      saveData("auth", true)
      return {
        ...state,
        err: "",
        userData: action.payload,
        auth: true,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        err: action.payload.response.data
      };

    case SIGNUP_REQUEST:
      return {
        ...state,
        err: "",
      };

    case SIGNUP_SUCCESS:
      saveData("userData", action.payload);
      return {
        ...state,
        err: "",
        userData: action.payload,
        auth: true
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        err: action.payload.response.data
      };


    case LOGOUT:
      saveData("auth", false)
      saveData("userData", "");
      return {
        ...state,
        auth: false,
        userData: {}
      }
    default:
      return state;
  }
}

export default reducer
import axios from "axios";
import { setAlert } from "./alert";

import { GET_PROFILE, PROFILE_ERROR } from "./types";

//Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    // no need to get by id because it knows based on the loggin token
    const res = await axios.get("/api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, staus: err.response.status }
    });
  }
};

import * as Types from "./types";
import { axiosWithAuth } from "../../utils/axioswithAuth";

const URL = "http://localhost:5000/api/";

export const fetchFriends = () => dispatch => {
  dispatch({ type: Types.START_FETCHING });

  axiosWithAuth()
    .get(`${URL}friends/`)
    .then(res => dispatch({ type: Types.FETCH_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: Types.FETCH_FAILURE, payload: err.response })
    );
};

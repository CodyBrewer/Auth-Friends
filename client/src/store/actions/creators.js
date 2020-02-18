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

export const addFriend = friend => dispatch => {
  dispatch({ type: Types.ADD_FRIEND });

  axiosWithAuth()
    .post(`${URL}friends/`, friend)
    .then(res =>
      dispatch({ type: Types.ADD_FRIEND_SUCCESS, payload: res.data })
    )
    .catch(err =>
      dispatch({ type: Types.ADD_FRIEND_FAILURE, payload: err.response })
    );
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: Types.DELETE_FRIEND });

  axiosWithAuth()
    .delete(`${URL}friends/${id}`)
    .then(res =>
      dispatch({ type: Types.DELETE_FRIEND_SUCCESS, payload: res.data })
    )
    .catch(err => {
      dispatch({ type: Types.DELETE_FRIEND_FAILURE, payload: err.response });
    });
};

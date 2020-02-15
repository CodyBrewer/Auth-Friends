import * as Types from "../actions";

const initialState = {
  friends: [],
  isFetching: false,
  addingFriend: false,
  deleteingFriend: false,
  error: ""
};

export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case Types.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        friends: action.payload
      };
    case Types.FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

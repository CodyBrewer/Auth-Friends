import * as Types from "../actions";

const initialState = {
  friends: [],
  isFetching: false,
  addingFriend: false,
  deletingFriend: false,
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
    case Types.ADD_FRIEND:
      return {
        ...state,
        addingFriend: true,
        error: ""
      };
    case Types.ADD_FRIEND_SUCCESS:
      return {
        ...state,
        addingFriend: false,
        friends: action.payload
      };
    case Types.ADD_FRIEND_FAILURE:
      return {
        ...state,
        addingFriend: false,
        error: action.payload
      };
    case Types.DELETE_FRIEND:
      return {
        ...state,
        deletingFriend: true,
        error: ""
      };
    case Types.DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        deletingFriend: false,
        friends: action.payload
      };
    case Types.DELETE_FRIEND_FAILURE:
      return {
        ...state,
        deletingFriend: false,
        error: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

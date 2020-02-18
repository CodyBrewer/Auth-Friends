import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFriends, deleteFriend } from "../../store/actions";
import { BarLoader } from "react-spinners";
import FriendForm from "./FriendForm";

const FriendsList = () => {
  const friends = useSelector(state => state.friends.friends);
  const isFetching = useSelector(state => state.friends.isFetching);
  const error = useSelector(state => state.friends.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends());
  }, []);

  const handleDelete = id => {
    // evt.preventDefault();
    dispatch(deleteFriend(id));
  };

  return (
    <>
      {isFetching ? (
        <BarLoader />
      ) : (
        <>
          <h1>Friends</h1>
          {friends.map(friend => (
            <>
              <h2>{friend.name}</h2>
              <p>{friend.age}</p>
              <a href={(`mailto:`, friend.email)}>{friend.email}</a>
              <button
                onClick={e => {
                  e.preventDefault();
                  handleDelete(friend.id);
                }}
              >
                Delete
              </button>
            </>
          ))}
        </>
      )}
      {error && <p>{error}</p>}
      <FriendForm />
    </>
  );
};

export default FriendsList;

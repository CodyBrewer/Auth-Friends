import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFriend } from "../../store/actions";

const FriendForm = () => {
  const dispatch = useDispatch();

  const [friend, setFriend] = useState({ name: "", age: "", email: "" });

  const handleChange = evt => {
    setFriend({ ...friend, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addFriend(friend));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          id="name"
          value={friend.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="age">
        Age:
        <input
          type="number"
          name="age"
          id="age"
          valeu={friend.age}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          id="email"
          value={friend.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Friend</button>
    </form>
  );
};

export default FriendForm;

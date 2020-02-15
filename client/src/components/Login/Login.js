import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = () => {
    console.log(loginCredentials);
    axios
      .post(`http://localhost:5000/api/login`, loginCredentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => {
        console.log(err.message);
      });
    props.history.push("/friends");
  };

  const handleLoginChange = evt => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.name]: evt.target.value
    });
  };

  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();
        handleSubmit();
      }}
    >
      <label htmlFor="username">
        username:
        <input
          type="text"
          name="username"
          id="username"
          value={loginCredentials.username}
          onChange={handleLoginChange}
        />
      </label>
      <label htmlFor="password">
        password:
        <input
          type="password"
          name="password"
          id="password"
          value={loginCredentials.password}
          onChange={handleLoginChange}
        />
      </label>

      <button type="submit">login</button>
    </form>
  );
};

export default Login;

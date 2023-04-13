import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { LOGIN_USER } from "../../gqloperations/mutations";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [signInUser, { loading, error, data }] = useMutation(LOGIN_USER, {
    // you can also do this by checking the data afterwards
    onCompleted: (data) => {
      localStorage.setItem("token", data.user.token);
      console.log("User is logged in: ", data.signInUser);
    },
  });

  loading && <h1>Loading ...</h1>;
  error && <div>{error.message}</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!!");
    console.log(formData);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <h3>Login </h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Enter your email</label>
          <input type="email" name="email" onChange={handleChange} />
          <br />
          <label htmlFor="password">Enter your password</label>
          <input type="password" name="password" onChange={handleChange} />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;

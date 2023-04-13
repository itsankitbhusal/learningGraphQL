import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { LOGIN_USER } from "../../gqloperations/mutations";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [signInUser, { loading, error, data }] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      localStorage.setItem("token", data.user.token);
      console.log("User is logged in: ", data.signInUser);
      if (localStorage.getItem("token")) {
        navigate("/");
      }
    },
  });

  loading && <h1>Loading ...</h1>;
  error && <div>{error.message}</div>;

  // this isnot a good way || using onCompleted callback is a good way

  // if (data) {
  //   localStorage.setItem("token", data.user.token);
  //   console.log("User is logged in: ", data.signInUser);
  //   if (localStorage.getItem("token")) {
  //     navigate("/");
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!!");
    console.log(formData);
    signInUser({
      variables: {
        userSignIn: formData,
      },
    });
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

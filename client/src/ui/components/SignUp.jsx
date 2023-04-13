import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { SIGNUP_USER } from "../../gqloperations/mutations";

const SignUp = () => {
  const [formData, setFormData] = useState({});

  const [signupUser, { data, loading, error }] = useMutation(SIGNUP_USER);

  loading && <h1>Loading ...</h1>;
  error && <div>{error.message}</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!!");
    // console.log(formData);
    signupUser({
      variables: {
        userNew: formData,
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
        {data && data.user && (
          <div>{data.user.firstName} is registered. You can login now!!</div>
        )}
        <h3>Sign Up </h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name</label>
          <input type="text" name="firstName" onChange={handleChange} />
          <br />
          <label htmlFor="lastName">Last name</label>
          <input type="text" name="lastName" onChange={handleChange} />
          <br />
          <label htmlFor="email">Enter your email</label>
          <input type="email" name="email" onChange={handleChange} />
          <br />
          <label htmlFor="password">Enter your password</label>
          <input type="password" name="password" onChange={handleChange} />
          <br />
          <button type="submit">SignUp</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;

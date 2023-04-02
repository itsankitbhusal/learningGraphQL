import React, { useState } from "react";

export const Login = () => {
  const [formData, setFormData] = useState({});

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

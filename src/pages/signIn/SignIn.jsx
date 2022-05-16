import React from "react";
import "./signIn.css";
import signInForm from "../forms/SignInForm";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { handleChange, values, handleSubmit } = signInForm();
  return (
    <div className="nutriverse__signup-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign in to your nutriverse account!</h1>
        <div className="form-input">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            // onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Please enter your password"
            value={values.password}
            // onChange={handleChange}
          />
        </div>
        <div className="btn-signin">
          <button className="form-input-btn" type="submit">
            Sign in
          </button>
          <span className="form-input-login">
            Click{" "}
            <Link role="button" to="/signin">
              here
            </Link>{" "}
            to reset your password
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

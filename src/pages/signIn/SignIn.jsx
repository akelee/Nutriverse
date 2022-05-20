import React from "react";
import "./signIn.css";
import signInForm from "../forms/SignInForm";
import { Link } from "react-router-dom";
// import signInValidate from "../signUpValidate/SignInValidate";

const SignIn = () => {
  const { handleChange, handleClick, handleSubmit, values } = signInForm();
  return (
    <div className="nutriverse__signin-container">
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
            onChange={handleChange}
            // onBlur={}
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
            onChange={handleChange}
            // onBlur={}
          />
        </div>
        <div className="btn-signin">
          <button
            className="form-input-btn"
            type="submit"
            onClick={handleClick}
            onSubmit={handleSubmit}
          >
            Sign in
          </button>
          <span className="form-input-login">
            Click <Link to="/account">here </Link>
            to reset your password
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

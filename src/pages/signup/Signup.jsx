import React from "react";
import "./signup.css";
import { useState } from "react";
import userForm from "../forms/SignUpForm";
import { Link } from "react-router-dom";
import validateInfo from "../signUpValidate/SignUpValidate";

function handleClick(event) {
  return "You have not filled out all the fields yet";
}

const validateInput = (e) => {};

function handleSubmit(e) {
  e.preventDefault();

  const { username, email, password, password2 } = useState("");

  console.log(e.target);
  console.log(username, email, password, password2);

  const errors = validateInput(username, email, password, password2);
  if (errors.length > 0) {
    this.setState({ errors });
    return;
  }
  // return <Link to="/success"></Link>;
}

const SignUp = () => {
  const { handleChange, handleClick, handleSubmit, values } = userForm();

  return (
    <div className="nutriverse__signup-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create a nutriverse account!</h1>
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
            onBlur={validateInfo}
          />
        </div>
        <div className="form-input">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="text"
            name="Email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onBlur={validateInfo}
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
            placeholder="Enter your password"
            value={values.password}
            onBlur={validateInfo}
          />
        </div>
        <div className="form-input">
          <label htmlFor="confirmpassword" className="form-label">
            Confirm password
          </label>
          <input
            id="password2"
            type="password"
            name="confirmpassword"
            className="form-input"
            placeholder="Confirm password"
            value={values.password2}
          />
        </div>
        <div className="btn-signin">
          <button
            className="form-input-btn"
            type="submit"
            onClick={handleClick}
            onSubmit={handleSubmit}
          >
            Submit
          </button>
          <span className="form-input-login">
            Or sign in <Link to="/signin">here</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

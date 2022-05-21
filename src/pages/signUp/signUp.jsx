import React from "react";
import "./signup.css";
import signUpForm from "../../components/forms/SignUpForm";
import { Link } from "react-router-dom";
import signUpValidate from "../signUpValidate/SignUpValidate";

function handleClick(event) {
  return "You have not filled out all the fields yet";
}

const SignUp = () => {
  const { handleChange, handleClick, handleSubmit, values } = signUpForm();
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
            onChange={handleChange}
            // onBlur={}
          />
        </div>
        <div className="form-input">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
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
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            // onBlur={}
          />
          <div className="password-invalid"></div>
        </div>
        <div className="form-input">
          <label htmlFor="confirmpassword" className="form-label">
            Confirm password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Confirm password"
            // value={values.password2}
            // onChange={handleChange}
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

import React from "react";
import { Link } from "react-router-dom";
import "./signupsuccessful.css";

const SignUpSuccessfulPage = () => {
  return (
    <div className="success-container">
      <div className="h2-container">
        <h2>Thank you for signing up!</h2>
      </div>
      <div>
        <Link to="/account">
          <button className="btn btn-success">My account</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUpSuccessfulPage;

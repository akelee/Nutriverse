import React from "react";
import { Link } from "react-router-dom";

const SignUpSuccessful = () => {
  return (
    <div className="success-container">
      <div className="h1-container">
        <h1>Thank you for signing up!</h1>
      </div>
      <div>
        <Link to="/account">
          <button className="btn btn-success">My account</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUpSuccessful;

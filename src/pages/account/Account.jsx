import React from "react";
import { Link } from "react-router-dom";
import "./account.css";

import { getDummyUsers } from "../../api/api";
const dummyUsers = getDummyUsers();

const AccountPage = () => {
  return (
    <div className="account-container">
      <div className="h2-container">
        <h2>Your account details:</h2>
        <div className="user-details">
          <h4>Username: {dummyUsers.username}</h4>
          <h4>Name: {dummyUsers.display_name}</h4>
          <h4>Email: {dummyUsers.email}</h4>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

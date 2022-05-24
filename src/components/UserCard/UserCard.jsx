import React from "react";
import "./usercard.css";

function UserCard({ username, display_name }) {
  return (
    <div className="card-body">
      <div className="card-title">
        <h4>Username:</h4>
      </div>
      <div className="card-text">
        <p>{username}</p>
      </div>
      <br></br>
      <div className="card-title">
        <h4>Display name:</h4>
      </div>
      <div className="card-text">
        <p>{display_name}</p>
      </div>
    </div>
  );
}

export default UserCard;

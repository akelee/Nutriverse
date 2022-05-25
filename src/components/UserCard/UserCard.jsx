import React from "react";
import "./usercard.css";

function UserCard({ username, display_name, email }) {
  return (
    <div className="user-card-body">
      <div>
        <h4>
          Username: <span className="user-info">{username}</span>
        </h4>
      </div>
      <br></br>
      <div>
        <h4>
          Display name: <span className="user-info">{display_name}</span>
        </h4>
        <br></br>
        <div>
          <h4>
            Email: <span className="user-info">{email}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default UserCard;

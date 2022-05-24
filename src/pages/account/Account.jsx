import React, { useEffect, useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import { Link } from "react-router-dom";
import "./account.css";

import { getDummyUsers } from "../../api/api";

function AccountPage() {
  const dummyUsers = getDummyUsers();
  const [users, setUsers] = useState(dummyUsers || null);

  // useEffect(() => {
  //   getDummyUsers().then((users) => {
  //     console.log(users);
  //     setUsers(users);
  //   });
  // }, []);

  return (
    <div className="account-container">
      <div className="account-details-container">
        <h2>Your account details:</h2>
        <div className="user-details">
          {
            <UserCard
              username={users[0].username}
              display_name={users[0].display_name}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default AccountPage;

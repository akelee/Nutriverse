import React, { useEffect, useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import "./account.css";

import { getDummyUsers, getUsersAccountDetails } from "../../api/api";

function AccountPage() {
  const dummyUsers = getDummyUsers();
  const usersAccountDetails = getUsersAccountDetails();
  const [users, setUsers] = useState(dummyUsers || null);

  useEffect(() => {
    setTimeout(() => {
      getUsersAccountDetails().then((data) => {
        setUsers(data);
      });
    }, 1000);
  }, []);

  return (
    <div className="account-container">
      <div className="account-details-container">
        <h2>Your account details:</h2>
        <div className="user-details">
          {usersAccountDetails === null ? (
            "Loading..."
          ) : (
            <UserCard
              username={dummyUsers[0].username}
              display_name={dummyUsers[0].display_name}
              email={dummyUsers[0].email}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AccountPage;

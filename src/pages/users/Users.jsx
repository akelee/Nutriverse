import React, { useState, useEffect } from "react";
import { getUsersDummyData, getUsers } from "../../api/api";
import UserCard from "../../components/UserCard";

export default function Users() {
  const [users, setUsers] = useState < User[""] || null > null;

  useEffect(() => {
    setTimeout(function() {
      getUsers().then((data) => setUsers(data));
    }, 1000);
  });

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className="users-display">
      {users === null
        ? "Loading users..."
        : users.map((user) => (
            <UserCard
              id={user.id}
              username={user.username}
              display_name={user.display_name}
            />
          ))}
    </div>
  );
}

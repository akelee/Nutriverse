function UserCard({ id, username, display_name }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">{display_name}</h5>
        <h6 className="card-subtitle">@{username}</h6>
      </div>
    </div>
  );
}

export default UserCard;

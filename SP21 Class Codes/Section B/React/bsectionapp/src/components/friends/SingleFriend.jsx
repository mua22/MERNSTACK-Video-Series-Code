import React from "react";

const SingleFriend = ({ friend, deleteFriend, index }) => {
  return (
    <div className="m-3">
      <h3>{friend.name}</h3>
      <button
        className="btn btn-danger"
        onClick={(e) => {
          deleteFriend(index);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleFriend;

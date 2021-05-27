import React from "react";
import SingleFriend from "./SingleFriend";
import TotalFriends from "./TotalFriends";

const Friends = () => {
  const [friends, setFriends] = React.useState([
    { name: "Usman" },
    { name: "Noman" },
    { name: "Hareem Fatima" },
  ]);
  const [newFriendName, setNewFriendName] = React.useState("");

  const addFriend = () => {
    let dummyFriiends = [...friends];
    dummyFriiends.push({ name: newFriendName });
    setFriends(dummyFriiends);
  };
  const deleteFriend = (index) => {
    let dummyFriiends = [...friends];
    dummyFriiends.splice(index, 1);
    setFriends(dummyFriiends);
  };
  return (
    <div>
      <div className="form-group">
        <input
          type="text"
          className="input-control"
          onChange={(e) => {
            setNewFriendName(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-info" onClick={addFriend}>
        Add New Friend
      </button>
      {friends.map((friend, index) => (
        <SingleFriend
          key={index}
          index={index}
          friend={friend}
          deleteFriend={deleteFriend}
        />
      ))}
      <TotalFriends friendCount={friends.length} />

      <br />
      {newFriendName}
    </div>
  );
};

export default Friends;

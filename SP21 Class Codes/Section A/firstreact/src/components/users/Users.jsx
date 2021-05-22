import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = React.useState([
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
  ]);
  const loadData = (page = 1) => {
    console.log("Access Page Data");
    axios.get("https://reqres.in/api/users?page=" + page).then((res) => {
      console.log(res.data);
      setUsers(res.data.data);
    });
  };
  React.useEffect(loadData, []);
  return (
    <div>
      <Link to="/users/add" className="btn btn-info">
        Add User
      </Link>

      <table className="table table-hover">
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Avatar</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.avatar} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={(e) => {
                    console.log("Send Delete Request for " + user.id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning"
                  onClick={(e) => {
                    console.log("Do Something for Edit " + user.id);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

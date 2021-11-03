import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

function UserList() {
  const url = process.env.REACT_APP_JSONPLACEHOLDER_API;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // HTTP METHOD: GET, POST, PUT, DELETE
    fetch(`${url}users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h1> User List </h1>
      <ListGroup>
        {users.map((user) => (
          <ListGroupItem key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default UserList;

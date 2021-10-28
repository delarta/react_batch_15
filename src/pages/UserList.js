import React, { useEffect, useState } from "react";

function UserList() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // HTTP METHOD: GET, POST, PUT, DELETE
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1> User List </h1>
      <ul>
        {users.map(user => <li key={user.id}></li> )}
      </ul>
    </div>
  );
}

export default UserList;

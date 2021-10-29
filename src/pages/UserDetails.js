import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

function UserDetails() {
  const params = useParams();

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  const [user, setUser] = useState([]);

  useEffect(() => {
    // HTTP METHOD: GET, POST, PUT, DELETE
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <Card>
      <CardBody>
        <h1>{user.name}</h1>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
      </CardBody>
    </Card>
  );
}

export default UserDetails;

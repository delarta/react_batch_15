import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

function UserDetails() {
  const params = useParams();
  const url = process.env.REACT_APP_JSONPLACEHOLDER_API;

  const [user, setUser] = useState([]);

  useEffect(() => {
    // HTTP METHOD: GET, POST, PUT, DELETE
    fetch(`${url}users/${params.id}`)
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

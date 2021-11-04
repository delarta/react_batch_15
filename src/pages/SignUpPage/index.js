import React, { useState } from "react";
import {
  Container,
  Card,
  CardBody,
  FormGroup,
  Label,
  Form,
  Input,
  Button,
} from "reactstrap";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && password) {
      try {
        const response = await axios({
          method: "POST",
          url: "http://localhost:3004/accounts",
          data: {
            name,
            email,
            password,
          },
        });

        if (response) {
          history.push("/login");
        }
      } catch (error) {
        alert("Something is wrong!");
      }
    } else {
      alert("Field cannot be empty");
    }
  };

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card style={{ width: "400px" }}>
        <CardBody>
          <h1>Sign Up</h1>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <FormGroup>
              <Label>Name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormGroup>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>

            <Button color="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default SignUpPage;

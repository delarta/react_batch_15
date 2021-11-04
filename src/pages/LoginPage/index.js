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
import { useDispatch } from "react-redux";
import { updateLoginStatus } from "../../redux/actions/accountsAction";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const response = await axios({
          method: "GET",
          url: "http://localhost:3004/accounts",
        });

        const accountData = response.data.find(
          (account) => account.email === email && account.password === password
        );

        if (accountData) {
          // alert("Login successful!");
          dispatch(updateLoginStatus(true));
          
          localStorage.setItem("loggedIn", true)

          setTimeout(() => {
            history.push("/");
          }, 1000);
        } else {
          alert("Login unsuccessful!");
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
          <h1>Login</h1>
          <Form onSubmit={(e) => handleSubmit(e)}>
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
              Don't have account? <Link to="/signup">Sign up</Link>
            </p>
            <Button color="primary" type="submit">
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default LoginPage;

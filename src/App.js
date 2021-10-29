import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarToggler,
} from "reactstrap";

import PostList from "./pages/PostList";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import PostListDark from "./pages/PostListDark";
import Cursor from "./pages/Cursor";

function App() {
  return (
    <BrowserRouter>
      <Navbar
        style={{ position: "fixed", zIndex: "100", width: "100%" }}
        color="light"
        expand="md"
        light
      >
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/posts">
                Post List
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/postsDark">
                Post Dark
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/users">
                User List
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/cursors">
                Cursor Example
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Container style={{ paddingTop: "65px" }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/posts">
            <PostList />
          </Route>
          <Route exact path="/postsDark">
            <PostListDark />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/users/:id">
            <UserDetails />
          </Route>
          <Route exact path="/cursors">
            <Cursor />
          </Route>
          <Route path="/:any">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;

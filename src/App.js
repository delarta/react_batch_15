import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarToggler,
} from "reactstrap";

import PostList from "./pages/Example/PostList";
import Home from "./pages/Example/Home";
import UserList from "./pages/Example/UserList";
import UserDetails from "./pages/Example/UserDetails";
import PostListDark from "./pages/Example/PostListDark";
import Cursor from "./pages/Example/Cursor";
import MoviesList from "./pages/Example/MoviesList";
import CatFactApp from "./pages/Example/CatFactApp";
import Todos from "./pages/TodoPage/Todos";
import CarExample from "./pages/CarExample/CarExample";

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
              <Link className="nav-link" to="/todos">
                Todos
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
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
        <Route exact path="/movies">
          <MoviesList />
        </Route>
        <Route exact path="/cat-facts">
          <CatFactApp />
        </Route>
        <Route exact path="/todos">
          <Todos />
        </Route>
        <Route exact path="/car">
          <CarExample />
        </Route>
        <Route path="/:any">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

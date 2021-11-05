import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Navbar, Collapse, Nav, NavItem, NavbarToggler } from "reactstrap";

import routes from "./routes";

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
              <Link className="nav-link" to="/todos">
                Todos
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Switch>
        {routes.map((route) => (
          <Route key={route.path} exact={route.exact} path={route.path}>
            <route.component />
          </Route>
        ))}

        <Route path="/:any">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

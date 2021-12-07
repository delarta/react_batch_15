import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import React from "react";
import MeetingRoom from "./pages/MeetingRoom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/meeting/:roomName">
          <MeetingRoom />
        </Route>
        <Route exact path="/">
          {() => {
            return (
              <div
                style={{
                  display: "flex",
                  height: "100vh",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link
                  to="/meeting/importantMeeting"
                  style={{
                    all: "unset",
                    backgroundColor: "teal",
                    color: "white",
                    padding: "8px 12px",
                    fontSize: "24px",
                  }}
                >
                  Join a Room
                </Link>
              </div>
            );
          }}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

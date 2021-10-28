import React, { useState } from "react";
import { Container, Button } from "reactstrap";

import PostList from "./pages/PostList";

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <Container className="pt-5">
      <Button color="primary" onClick={() => setVisible(!visible)}>
        Show/hide Component
      </Button>
      {visible ? <PostList /> : ""}
    </Container>
  );
}

export default App;

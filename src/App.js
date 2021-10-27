import React, { useState } from "react";

import PostList from "./PostList";

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Show/hide Component</button>
      {visible ? <PostList /> : ""}
    </div>
  );
}

export default App;

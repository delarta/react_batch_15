import React, { useState, useEffect } from "react";

function FuncComp() {
  const [name, setName] = useState("Delarta");
  const [counter, setCounter] = useState(0);

  // componentDidMount
  useEffect(() => {
    if(counter !== 0){
      console.log("GET TODOS API");
    }
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if(counter !== 0){
      console.log("UPDATE TODO API");
    }
  }, [counter]);

  return (
    <div>
      <h1>This is Function Component</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>Welcome {name}</h2>

      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Add Count</button>
    </div>
  );
}

export default FuncComp;

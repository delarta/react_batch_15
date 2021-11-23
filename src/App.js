import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { saySomething, showSomething } from "./store/actions/hello";
import { incrementStart, decrementStart } from "./store/actions/counter";

function App() {
  const hello = useSelector((state) => state.hello.data);
  const counter = useSelector((state) => state.counter.data);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(saySomething("This is something else"));
  };
  
  const handleShow = () => {
    dispatch(showSomething());
  };

  const handleIncrement = () => {
    dispatch(incrementStart())
  }

  const handleDecrement = () => {
    dispatch(decrementStart())
  }

  return (
    <div>
      <h1>{hello}</h1>
      <button onClick={() => handleClick()}>Change text</button>
      
      <button onClick={() => handleShow()}>Show Something</button>
      <br />
      <br />
      <br />
      <h1>{counter}</h1>
      <button onClick={() => handleIncrement()}>Increment</button>
      <button onClick={() => handleDecrement()}>Decrement</button>
      
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-container">
        <h1>Counter Application</h1>
        <div className="container">
          <button className="button" onClick={() => dispatch(decrement())}>Decrement</button>
          <span>{count}</span>
          <button className="button" onClick={() => dispatch(increment())}>Increment</button>
        </div>
      </div>
    </>
  );
}

export default App;

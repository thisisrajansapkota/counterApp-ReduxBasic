import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  resetToZero,
} from "./redux/counter.js";

import "./App.css";

function App() {
  // const { count } = useSelector((state) => state.counter);
  // or we can do this too as above:
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter App</h1>
      <section className="section">
        <h3> The count is: {count} </h3>
        <div>
          <button className="increment" onClick={() => dispatch(increment())}>
            +
          </button>
          <button className="decrement" onClick={() => dispatch(decrement())}>
            -
          </button>
        </div>
        <div>
          <button
            className="increment"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            +5
          </button>
          <button
            className="decrement"
            onClick={() => dispatch(decrementByAmount(5))}
          >
            -5
          </button>
        </div>
        <div>
          <button className="reset" onClick={() => dispatch(resetToZero())}>
            Reset
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;

/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

// function declaration.....hoisted!
// function expression......NOT hoisted!

import React, { useState } from "react";

function Playground(props) {
  const [blah, setBlah] = useState(100);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  // count = count + 1;

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      setError("Count must be less than or equal to 10 ya jerk!");
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setError("Count must be greater than or equal to 0 ya chump!");
    }
  }

  return (
    <div className="container">
      <h2>PLAYGROUND!!!!</h2>
      <p>Your instructor is: {props.instructor}</p>
      <p>My current mood is: {blah}</p>
      <p>{error}</p>
      <h3>The current count is: {count}</h3>
      <button onClick={increment}>Incremement</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Playground;

// How many things can you return from a JS function...? ONE THING!

// props are...? data passed from a parent to a child
// props are???? object!
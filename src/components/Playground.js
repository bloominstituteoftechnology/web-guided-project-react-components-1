/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

// What is a 'hook'? 
// we use hooks because React hooks into them - runs again when the value changes


// React has class components
//// in old days, had to know the component lifecycle
////// creation, updating
// Hooks allow functional components to have state as well

import React, { useState } from 'react' // hey React, come translate this file!

export function Playground(props) {
  const [value, setValue] = useState('Hi there')
  const [count, setCount] = useState(0)
  const [dogs, setDogs] = useState([])

  // axios
  // .get('mydogsUrl')
  // .then(dogsData => {
  //   setDogs(dogsData)
  // })

  // return something
  return (
    <>
     <p>Hello world!</p>
     <p>{`Is the playground rainy? ${props.rainy}`}</p>
     <p>Current count is: {count}</p>
     <p>Current value is: {value}</p>
     <button onClick={() => setCount(count + 1)}>Count!</button>
     <button onClick={() => setValue('howdy')}>Click the button!</button>
   </>
  )
}

// Swingset, to be used inside Playground
// Is the swingset wet?
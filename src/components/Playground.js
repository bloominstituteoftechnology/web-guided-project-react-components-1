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
import React, { useState } from 'react'

export default function Playground(props) {
  // the following is the same as the destructuring option; destructuring is cleaner.
  // const theArray = useState(0)
  // const count = theArray[0]
  // const setCount = theArray[1]
  const [count, setCount] = useState(0)
  const [spinnerOn, setSpinnerOn] = useState(true)
  const [weapon, setWeapon] = useState('scissors')

  if(spinnerOn){
    return (
      <div className='container'>
        Please wait, Loading...
        <button onClick={() => {setSpinnerOn(false)}} >Turn Spinner Off</button>
      </div>
    )
  }

  return (
    <div className='container'>
      <h3>Playground for {props.track} {props.cohort}</h3>
      <div>the count is {count}</div>
      <button onClick={(event) => {setCount(count +1)}}>increase</button>

      <p>The spinner is ... {spinnerOn ? 'ON' : 'OFF'}</p>
      <button onClick={(e) => {setSpinnerOn(!spinnerOn)}}>Toggle Spinner</button>

      <h5>Current weapon is ... {weapon}!</h5>
      <button onClick={() => {setWeapon('paper')}} >Paper</button>
      <button onClick={() => {setWeapon('rock')}} >Rock</button>
      <button onClick={() => {setWeapon('scissors')}} >Scissors</button>

    </div>
  )
}
// In order to work with state,
// we need the state hook from React
import React from 'react'

function Family() {
  // Family is the top-level component so it does not receive props
  // Family needs some state to hold savings, as they'll change over time

  return (
    // Parent expects certain props!
    <Parent />
  )
}

function Parent(props) {
  // These are the props Parent expects
  const { name, account } = props

  if (!name || !account) {
    return <div className='container bad'>This Parent needs its props!</div>
  }

  return (
    <div className='container'>
      {/* The name and account should come from props, not hard-coded! */}
      <h3>Parent Lucas</h3>
      <div>Money: 2000</div>

      {/* Child expects certain props! */}
      <Child />
      <Child />
    </div>
  )
}

function Child(props) {
  // These are the props Child expects
  const { name, allowance } = props

  if (!name || allowance === undefined) {
    return <div className='container bad'>This Child needs its props!</div>
  }

  return (
    <div className='container'>
      {/* Name and allowance should come from props, not hard-coded! */}
      <h3>Child {name}</h3>
      <div>Allowance: {allowance}</div>
    </div>
  )
}

export default Family

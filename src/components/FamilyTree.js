// In order to work with state,
// we need the state hook from React
import React from 'react'

function Family() {
  // Family is the top-level component so it does not receive props
  // Family needs some state to hold savings, as they'll change over time
  // Family needs to render a Parent
  return null
}

function Parent(props) {
  // Parent expects some information passed through props
  // We can optionally guard against props not being what they're supposed to
  // This Parent should render its properties (name, etc)
  // This Parent can render one or more Child components
  return null
}

function Child(props) {
  // A Child expects some props (name, etc)
  return null
}

export default Family

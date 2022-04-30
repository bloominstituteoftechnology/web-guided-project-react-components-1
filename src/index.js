import React from 'react'
import { render } from 'react-dom'
import Playground from './components/Playground'
import Lightbulb from './components/Lightbulb'

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

function App(props) {
  const { track } = props
  return (
    <div className='container'>
      <h1>Welcome to React, {track} rockstars!!</h1>
      <p>A {props.instructor} learned section of React for students from {track} {props.cohort}</p>
      <Playground cohort={props.cohort} track={track} />
      <Lightbulb />
    </div>
  )
}

render(
  <App cohort='22' instructor='self' track='Web' />,
  document.querySelector('#root')
)

import React from 'react'
import { render } from 'react-dom'

/*
💥💥💥 A Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly braces
  - We interpolate attribute values and content
*/
function App(props) {
  return (
    <div className='container'>
      <h1>Welcome to React, {props.name}</h1>
    </div>
  )
}

/*
💥💥💥 B Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we can obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/
render(
  <App name='Andre' />,
  document.querySelector('#root')
)

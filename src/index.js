import React from 'react'
import { render } from 'react-dom'

import Playground from "./components/Playground";

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
  console.log(props);
  return (
    <div className='container'> 
      {/**
       * const divElem = document.createElement("div");
       * divElem.classList.add("container");
       */}
      <h1>Welcome to React, {props.track}: {props.cohort} rockstars!!</h1>
      <h2>Today's day is...{props.day}</h2>
      <p>Your instructor is: {props.instructor}</p>
      <p>I am {props.happy ? "happy!" : "sad!"} today</p>
      <img src="blah.com" />
      <input type="text" value="OH NOES" />
    </div>
  )
}

/**
 * if (props.happy) {
 *   return "happy"
 * } else {
 *   return "sad"
 * }
 */

// props = data passed from a parent to a child
// props are...??? key value pairs OBJECT!

render(
  <App track="Web" cohort="59" instructor="Casey" happy={false} day="Monday" blah="foo" />,
  document.querySelector('#root')
)
/**
 * const props = {
 *  track: "Web",
 *  cohort: "59",
 *  instructor: "Casey",
 *  happy: false,
 *  day: "Monday",
 *  addNum: function() {}
 * }
 */
// App(props)
import React from 'react'
// import { render } from 'react-dom'
import ReactDOM from 'react-dom'

import { Playground } from './components/Playground'

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content -- LOGIC AND HTML LIVE TOGETHER IN HARMONY
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/


// state: all info passed into a component - or your entire app!
// you can make a component track info by passing it in as props
// giving state to a component

// const myDogsData = [{}]
// axios.get()


function App(props) {
  const { cohort, dayofweek, currentYear, sunny, rainy } = props // destructuring is never mandatory!

  console.log(props)
  console.log(cohort, dayofweek, currentYear, sunny, rainy)

  const myBrandNewProp = 42

  const isEven = Math.floor(Math.random() * 10) % 2 === 0 // true if even, false if odd

  return (
    <div className='container'>
      <h1>Welcome to React, Web {cohort}</h1>
      <p>The day of the week is: {dayofweek}</p>
      <p>The current year is: {currentYear}</p>
      <p>Is today sunny? {isEven ? 'yes' : 'no'}</p>
      <p>Is today rainy? {rainy ? 'yes' : 'no'}</p>
      <p>{`Is it rainy? ${rainy}`}</p>

      <Playground rainy={rainy} meaning={myBrandNewProp} />

    </div>
  )
}
// { rainy: false }

// const myProps = { cohort: '37', dayofweek: 'Tuesday', currentYear: '2021', sunny: true }
// App(myProps)


ReactDOM.render(
  <App cohort='31' dayofweek='Tuesday' currentYear='2021' rainy={true} />,
  document.querySelector('#root')
)

// 👉 Importing React libs from node_modules folder (see package.json)
// to make React components
// to append a React tree of components to the DOM

// 👉 Importing a React component from another file
// RockPaperScissors

// 👉 Importing a React component from node modules (a lib component)
// @ladrillo/lightbulb is a component that takes `size` (number), `color` (string) and `on` (boolean)


/*
💥💥💥 TASK 1A- Mounting a React element to the DOM (often only once per app) 💥💥💥
  👉 execute the 'render' named export from react-dom
  👉 1st ARG - React element (or React component "invoked")
  👉 2nd ARG - DOM element to append to
*/


/*
💥💥💥 TASK 1B- Example of a React component `Greet` being DECLARED 💥💥💥

  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly braces
  - We interpolate attribute values and content
*/
function Greet() { // takes data => returns elements

}


/*
💥💥💥 TASK 1C- Examples of a `Greet` component being INVOKED 💥💥💥

  - Components are "invoked" so they return elements
  - Instead of invoking with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly

  <Greet person='Ian' emphasis />              // props is object with { person: 'Ian', emphasis: true }
  <Greet person='Michael' emphasis={false} />  // props is object with { person: 'Michael', emphasis: false }
  <Greet person='Sarah' />                     // props is object with { person: 'Sarah' }
*/


// 💥💥💥 TASK 2: render the RockPaperScissors to div#rockPaperScissors
// RockPaperScissors expects a 'player' prop
// Work on the RockPaperScissors component

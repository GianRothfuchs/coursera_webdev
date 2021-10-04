import React from 'react' // this refers to a module, can also be a file the use './react'
import ReactDom from 'react-dom'

function Greeting() {
  // when you create a react component the name MUST start with a capital

  return <h4>HI this is my first react component</h4> //returns JSX, i.e. react readable html
}

ReactDom.render(<Greeting />, document.getElementById('root'))
// note Greeting has to be close, alternatively like this <Greeting></Greeting>
// the second arg tragets public/index.html element: <div id="root"></div>

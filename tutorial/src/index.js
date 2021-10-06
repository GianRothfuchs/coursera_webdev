import React from 'react' // this refers to a module, can also be a file the use './react'
import ReactDom from 'react-dom'
import './index.css' // this is ar ref to a non-js file with relvative path

import { data } from './books'

import Book from './Book' //with default export you can name the import the way you want

function BookList() {
  return (
    <section className='booklist'>
      {data.map((book) => {
        /* note book= proterty is gone now*/
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

/*
Example:

<h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
  Jean-Yves Ferri
</h4>

JSX note: style={} enables setting up js objects within {}. I.e. putting a map looks like {{key1:"value1"}}, the js must have exactly one return
CSS note: since stlye is defined in line it will overrule all css from index.css
*/

ReactDom.render(<BookList />, document.getElementById('root'))
// note Greeting has to be close, alternatively like this <Greeting></Greeting>
// the second arg tragets public/index.html element: <div id="root"></div>

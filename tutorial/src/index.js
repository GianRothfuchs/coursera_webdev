import React from 'react' // this refers to a module, can also be a file the use './react'
import ReactDom from 'react-dom'
import './index.css' // this is ar ref to a non-js file with relvative path

const firstBook = {
  img: 'https://via.placeholder.com/150',
  title: 'Asterix 39: Asterix und der Greif',
  author: 'Jean-Yves Ferri',
}
const secondBook = {
  img: 'https://via.placeholder.com/150',
  title: 'Asterix 40: Asterix und der Wurm',
  author: 'Jean-Yves Ferri',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>

      {/* it is also possible to log in jsx console.log(props)*/}
    </article>
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

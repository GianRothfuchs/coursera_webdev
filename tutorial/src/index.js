import React from 'react' // this refers to a module, can also be a file the use './react'
import ReactDom from 'react-dom'
import './index.css' // this is ar ref to a non-js file with relvative path

const books = [
  {
    id: 1,
    img: 'https://via.placeholder.com/150',
    title: 'Asterix 39: Asterix und der Greif',
    author: 'Jean-Yves Ferri',
  },
  {
    id: 2,
    img: 'https://via.placeholder.com/150',
    title: 'Asterix 40: Asterix und der Wurm',
    author: 'Jean-Yves Ferri',
  },
  {
    id: 3,
    img: 'https://via.placeholder.com/150',
    title: 'Asterix 41: Asterix und der Vogel',
    author: 'Jean-Yves Ferri',
  },
  {
    id: 4,
    img: 'https://via.placeholder.com/150',
    title: 'Asterix 42: Asterix und der Stein',
    author: 'Jean-Yves Ferri',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        /* note book= proterty is gone now*/
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

const Book = (props) => {
  //console.log(props)
  const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
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

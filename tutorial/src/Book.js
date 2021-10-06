import React from 'react'

const clickHandler = (e) => {
  console.log(e.target)
  alert('hello world')
}

const complexExample = (e, author) => {
  console.log(author)
}

const Book = (props) => {
  //console.log(props)
  const { img, title, author } = props
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      {/* onClick is the attribute and after '=' the 
      eventhandler (or the reference to it) follows. Note
      camelCase in onClick is a must.*/}
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      {/*as this is a fucniton with an argument it executes 
      on load as it gets rendered. To prevent this it is encapsulated
      in an inline function.*/}
      <button type='button' onClick={() => complexExample(author)}>
        more complex function
      </button>
    </article>
  )
}

// only one default export per file
export default Book

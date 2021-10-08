# Java Script

## React

- [Online Course](https://www.youtube.com/watch?v=4UZrsTqkcW4)
- [Current](https://youtu.be/4UZrsTqkcW4?t=18427)
- [React Tutorial](./tutorial/)
- [Advanced React](./react-advanced-2020/)

## Tutorial

### Setup

The setup process is described in lengthy detail [here](https://reactjs.org/docs/create-a-new-react-app.html). The fast way to setup a new project is the following:

```javascript
npx create-react-app my-app
cd my-app
npm start
```

The dev server can be spinned up by doing `npm start`. This is starts whatever is noted in package.json under Start. A lot of files are generated. The entry point is in `src/inedx.js`.

### JSX

A react componenet can be build using React elements or using JSX. JSX is perferred as React elements become messy, quite quickly:

```javascript
// React componenet two versions
// JSX version
function Greeting() {
  // when you create a react component the name MUST start with a capital
  return <h4>HI this is my first react component</h4> //returns JSX, i.e. react readable html
}

// non JSX version
const Greeting = () => {
  return React.createElement(
   'div',
   {},
   React.createElement('h1',{},'hello world')
  );
};
```

JSX is a quasi html code where a couple of rules apply.

- Must return one single element, no adjacent elements
- use camelCase for html attributes
- all elements need to be closed out

Nested React components

```javascript
function Greeting() {
 return (
  <div>
   <Person/>
   <p>Is the greatest of all times</p>
  </div>
 );
};

const Person = () => <h2>John Doe</h2>
```

Nested react components can be inspected with React Developer tools (for example in Firefox). By perssing F12 and selecting the Componenets tab.

Within JSX proper js can be used by placing it within {}. The following snippet shows styles defined as an ordinary js map are placed as a style property in JSX.

```
const Person = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>John Doe</h4>
) 
```

Properties of JSX components are passed as follows:

```
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

// OR

const Book = (props) => {
  const {img,title,author} = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

// OR
/ object destructuring in js wihtin the functions parameters
const Book = ({img,title,author} ) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

```

Properties can also passed on with so called children.

```
function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        Description {/*this is a child and can be accessed with the keyword 'children'*/}
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

// descructuring using keywork children
const Book = ({img,title,author} ) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
	  {children}
    </article>
  )
}

```

Iterating over a list of book data looks like this.

```
[ {
    id: 4,
    img: 'https://via.placeholder.com/150',
    title: 'Asterix 42: Asterix und der Stein',
    author: 'Jean-Yves Ferri',
  },
  ...
]


function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        /*key must be provided as React needs to 
         uniquely indentify the componenets
         sloppy way:
         return <Book key={index} book={book}></Book>
        */
        return <Book key={book.id} book={book}></Book>
      })}
    </section>
  )
}

const Book = (props) => {
  //console.log(props)
  const { img, title, author } = props.book
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

// OR using spread operator ...

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
```

### Events

Events are a big topic in React, as they relate to state. Here only a small number (i.e. click and hover) of events is considered. A more extensive list can be found  [here](https://reactjs.org/docs/events.html).

Here are some examples how events are handeled.Note the camel case in onClick is a must. The onClick element is referred to as the attribute and what follows after the = sign is the event handler. The first implementation is a simple inline function. 

```
	<h1 onClick={() => console.log(title)}>{title}</h1>
```

Instead of using inline functions it is also possible to set a reference to an event handler. The event itself can also be passed as an argument `e`, for example to get the target that has been clicked.
```
	const complexExample = (e,author) => {
	  console.log(e)
	  console.log(author)
	}
	
	<button type='button' onClick={() => complexExample(author)}>
	more complex function
	</button>
```
Whenever the eventhandler has an argument it needs to be encapsulated in an inline function, otherwise it gets executed on render (i.e. on load of the page).

### Import/Export Statements

## Advanced React

[Video 3:32:36](https://youtu.be/4UZrsTqkcW4?t=12756)

### States

#### Why Using States?

[Code File](./react-advanced-2020/src/tutorial/1-useState/setup/1-error-example.js)

One reason to use state is to trigger a re-render of a page once the user triggered an event. The following example shows the problem. The event handler `handleClick` updates the value of `{title}` but since the page is not re-rendered this will not change the displayed title.

```

const ErrorExample = () => {
  let title = 'random title'
  const handleClick = () => {
    title = 'hello people'
    console.log(title)
    // this will change the title but it
    // will not be visible on the page as
    // it does not trigger a re-render
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change Title
      </button>
    </React.Fragment>
  )
}

```

#### Basics
##### `useState`

A central element of statefullness is the `useState` hook, which is a function. It takes one argument which can be considered a default vlaue and it gives two outputs first the argument and second a function. Please note the naming of the `useState` outputs, as it follows a naming convention.

```
const [text,setText] =useState('some text')
```


Whenever `setText` is invoked with a new string like 'some new text' the variable `text` will trigger a re-rendering using the new value.

```
const UseStateBasics = () => {
  const [text, setText] = useState('random title')
  const handleClick = () => {
    setText('helloWorld')
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
}
```
[Example Code: useState](./react-advanced-2020/src/tutorial/1-useState/setup/3-useState-array.js)


In case some elements of an object need to be changed to follwoing statement becomes handy. First all values of the object person are loaded using the sread operator. Then the message is overwritten.

```
const [person, setPerson] = useState({
name: 'peter',
age: 24,
message: 'blah',
})

setPerson({ ...person, message: 'hello World' })
```
[Example Code: useState & objects](./react-advanced-2020/src/tutorial/1-useState/setup/4-useState-object.js)

##### `useEffect`
Another usefull hook is `useEffect` which triggers effects to be run after render. The use is showcased in the following code, it also shows the use of a cleanup function.

[Example Code: useEffect & cleanup](./react-advanced-2020/src/tutorial/2-useEffect/setup/2-useEffect-cleanup.js)


## Site Deployment

A produciton build can be created by using `npm`. The resulting build will be available in the build folder.

```
npm run build
```


## Furter Reading

Brushing up [Javascript](https://www.youtube.com/c/codingaddict) where the Javascript Nuggets are most helpful.

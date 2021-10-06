# Java Script

## React

- [Online Course](https://www.youtube.com/watch?v=4UZrsTqkcW4)
- [Current](https://youtu.be/4UZrsTqkcW4?t=5519)
- [Workspace](./tutorial/)

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
```


## Furter Reading

Brushing up [Javascript](https://www.youtube.com/c/codingaddict) where the Javascript Nuggets are most helpful.

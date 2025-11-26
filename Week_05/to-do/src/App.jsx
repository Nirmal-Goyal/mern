import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "go to gym from 7-9",
      completed: false
    },
    {
      title: "study DSA",
      description: "study DSA from 9-11",
      completed: true
    }
  ])


  function addTodo(){
    setTodos([...todos, {
      title: "new todo",
      description: "desc of new todo"
    }])
  }

  return (
    <div>
      <button style={{
        border: 2,
        borderRadius:10,
        padding: 10,
        backgroundColor: 'green',
        cursor: 'pointer'
      }} onClick={addTodo}>add a random todo</button>

      {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
      <Todo title={todos[1].title} description={todos[1].description}></Todo> */}

      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
}


// todo app{
//   title,
//   description,
//   completed
// }

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
  </div>
}

export default App

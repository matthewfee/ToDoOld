import './App.css'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoList from './containers/ToDoList'
import AddToDo from './containers/AddToDo'

function App() {
  const [toDoItems, setToDoItems] = useState<object[]>([])

  return (
    <div className='wrapper'>
      <header>
        <h1>To Dos</h1>
      </header>
      <body className='body-section'>
        <AddToDo setToDoItems={setToDoItems}></AddToDo>
        <ToDoList toDoItems={toDoItems}></ToDoList>
      </body>
    </div>
  )
}

export default App

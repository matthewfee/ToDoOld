import './App.css'
import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoList from './containers/ToDoList'
import AddToDo from './containers/AddToDo'

export interface IState {
  toDoItems: {
    name: string
    description: string
    checked: boolean
  }[]
  setToDoItems: React.Dispatch<
    React.SetStateAction<
      {
        name: string
        description: string
        checked: boolean
      }[]
    >
  >
}

function App() {
  const [toDoItems, setToDoItems] = useState<IState['toDoItems']>([
    {
      name: 'Code More',
      description: 'Code more To Do Apps',
      checked: false
    }
  ])

  return (
    <Container>
      <AddToDo toDoItems={toDoItems} setToDoItems={setToDoItems}></AddToDo>
      <ToDoList toDoItems={toDoItems} setToDoItems={setToDoItems}></ToDoList>
    </Container>
  )
}

export default App

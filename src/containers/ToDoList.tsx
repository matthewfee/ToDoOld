import React from 'react'
import ToDoItem from '../components/ToDoItem'

type toDoListProps = {
  toDoItems: object[]
}

const ToDoList = (props: toDoListProps) => {
  const { toDoItems } = props

  return <ToDoItem name={'name-test'} description={'description'}></ToDoItem>
}

export default ToDoList

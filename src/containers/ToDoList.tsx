import React from 'react'
import ToDoItem from '../components/ToDoItem'
import { Table } from 'react-bootstrap'
import { IState as Props } from '../App'

interface IProps {
  toDoItems: Props['toDoItems']
  setToDoItems: Props['setToDoItems']
}

const ToDoList = (props: IProps) => {
  const { toDoItems, setToDoItems } = props

  const deleteItem = (e: any): void => {
    let index = e.target.value
    let arr = [...toDoItems]
    arr.splice(index, 1)
    setToDoItems(arr)
  }

  const handleCheck = (e: any): void => {
    const index = e.target.value
    let arr = [...toDoItems]
    let item = arr[index]
    item.checked = !item.checked
    setToDoItems(arr)
  }

  return (
    <Table striped bordered hover className={`mt-5`}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {toDoItems.map((item, index) => {
          return (
            <ToDoItem
              name={item.name}
              key={index}
              value={index}
              description={item.description}
              checked={item.checked}
              deleteItem={deleteItem}
              handleCheck={handleCheck}
            ></ToDoItem>
          )
        })}
      </tbody>
    </Table>
  )
}

// <ToDoItem name={'name-test'} description={'description'}></ToDoItem>
export default ToDoList

import React from 'react'
import { Button } from 'react-bootstrap'

interface ToDoItemProps {
  name: string
  description: string
  checked: boolean
  value: number
  deleteItem: (e: any) => void
  handleCheck: (e: any) => void
}

const ToDoItem = ({
  name,
  description,
  checked,
  value,
  deleteItem,
  handleCheck
}: ToDoItemProps) => {
  const checkStyling = checked ? 'text-white bg-secondary' : ''

  return (
    <tr className={checkStyling}>
      <td className={checkStyling}>{name}</td>
      <td className={checkStyling}>{description}</td>
      <td className={checkStyling}>
        <input
          className={`form-check-input`}
          type='checkbox'
          value={value}
          id='flexCheckDefault'
          onChange={handleCheck}
          checked={checked}
        ></input>
        <Button className={'m-4'} value={value} onClick={deleteItem}>
          Delete
        </Button>
      </td>
    </tr>
  )
}

export default ToDoItem

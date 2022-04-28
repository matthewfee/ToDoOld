import React from 'react'

interface ToDoItemProps {
  name: string
  description: string
}

const ToDoItem = ({ name, description }: ToDoItemProps) => {
  return (
    <div>
      {name}: {description}
    </div>
  )
}

export default ToDoItem

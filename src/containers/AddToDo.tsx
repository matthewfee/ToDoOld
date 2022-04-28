import React, { useState } from 'react'

type Props = {
  setToDoItems: React.Dispatch<React.SetStateAction<object[]>>
}

const [name, setName] = useState<string>('ToDo Name')
const [description, setDescription] = useState<string>('Describe the item here')

function AddToDo({}: Props) {
  return (
    <div>
      <h2>Add New To Do</h2>
    </div>
  )
}

export default AddToDo

import React, { useState } from 'react'

type Props = { 
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void 
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => {
      saveTodo(e, formData)
      setFormData({})
    }}>
      <div>
        <div>
          <label htmlFor='name'>To-do</label>
          <input onChange={handleForm} value={(formData as ITodo)?.name  || ""} type='text' id='name' />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={handleForm} value={(formData as ITodo)?.description  || ""}  type='text' id='description' />
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Add</button>
    </form>
  )
}

export default AddTodo
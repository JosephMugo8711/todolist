import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    // Empty string
    const [value, setValue] = useState("")

    // fun that captures  the value of the state when we submit the form

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value)

        setValue("")
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='What is the task today?'
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>
            Add Task
        </button>
      
    </form>
  )
}

export default TodoForm

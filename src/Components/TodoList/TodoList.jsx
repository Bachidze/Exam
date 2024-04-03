import React, { useState } from 'react'

export default function TodoList() {
    const [input,setInput] = useState('')
    const [todo,setTodo] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id:Math.random(),
            title:input
        }

        setTodo(prev =>[...prev,newTodo])
    }
  return (
    <>
    <h1>ToDo List</h1>
    <form onClick={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button>Add</button>
    </form>
    {
        todo.map(el => (
            <div>
                <h1>{el.title}</h1>
            </div>
        ))
    }
    </>
  )
}

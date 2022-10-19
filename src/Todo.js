import React from 'react'
import './style.css';

const Todo = ( { todo, toggleTodo, type }) => {

  function handleTodoClick() { 
    toggleTodo(todo.id)
  }

  return (
    <div className='list'>
      
        <input className="input-checkbox" type={type} checked={todo.complete} onChange={handleTodoClick} />
        {todo.name}
    </div>
  )
}

export default Todo

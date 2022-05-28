import React from 'react'
import Todo from './Todo'

const ToDoList = ({status,setStatus,setTodos,todos,filterTodos}) => {
  return (
    <div class="todo-container">
    <ul class="todo-list">
      {filterTodos.map((todo) => (
        <Todo 
        todo={todo}
        key = {todo.id} 
        text = {todo.text} 
        setTodos = {setTodos}
        todos = {todos}
        status = {status}
        setStatus = {setStatus}/>
      ))}
    </ul>
    
  </div>
  )
}

export default ToDoList
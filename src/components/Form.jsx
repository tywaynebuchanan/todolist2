import React from 'react'

const Form = ({...propS}) => {

    const {setStatus,setInputText, inputText, setTodos, todos} = propS

    const inputTextHandler = (event) =>{
        const inputText = event.target.value;
        setInputText(inputText);
        
    }

    const submitTodoHandler = (event) =>{
        event.preventDefault();
      setTodos([
        ...todos,
        {
            text:inputText,
            complete:false,
            id:Math.random()

        }
      ])
        setInputText("");
    }

    const statusHandler = (event) =>{
      setStatus(event.target.value);
      
      
    }
  return (
      
    <form>
      <input value = {inputText}
      onChange = {inputTextHandler} 
      type="text" 
      className="todo-input"
       />
      <button onClick = {submitTodoHandler} className="todo-button" type="submit">
      <i class="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange = {statusHandler}name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
     
    </form>
    
    
  )
}

export default Form
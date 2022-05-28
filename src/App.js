import React,{useState} from 'react';
import Form from './components/Form';
import './App.css';
import ToDoList from './components/ToDoList';


const App =() => {
  const [inputText,setInputText] = useState('');
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");

  let propS = {
    inputText:inputText,
    todos:todos,
     setTodos:setTodos,
     setInputText:setInputText

  }


  return (
    <div className ="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form {...propS}/>
      <ToDoList 
      setTodos = {setTodos} 
      todos = {todos}
      status = {status}
      setStatus = {setStatus}/>
    </div>
    
  );
}

export default App;

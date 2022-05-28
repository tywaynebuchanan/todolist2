import React,{useState,useEffect} from 'react';
import Form from './components/Form';
import './App.css';
import ToDoList from './components/ToDoList';

const App =() => {

  //States
  const [inputText,setInputText] = useState('');
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filterTodos,setFilterTodo] = useState([]);

 
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos,status])

  useEffect(() => {
    getLocalTodos();
  } ,[]);

  //Functions
const filterHandler = () => {
  switch(status){
    case 'completed':
      setFilterTodo(todos.filter(todo => todo.completed === true));
      break;
    case 'uncompleted':
      setFilterTodo(todos.filter(todo => todo.completed === false));
      // eslint-disable-next-line no-fallthrough
      default:
      setFilterTodo(todos);
      break;
  }
}

  //Save to local storage
  const saveLocalTodos = () => { 
    localStorage.setItem("todos",JSON.stringify(todos));
  return todos;
}
  
  //Get Items from local storage
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
        localStorage.setItem("todos",JSON.stringify([]));
       }else{
         let todolocal = JSON.parse(localStorage.getItem("todos"));
         setTodos(todolocal);
       }
}

  
  let propS = {
    inputText:inputText,
    todos:todos,
     setTodos:setTodos,
     setInputText:setInputText,
     setStatus: setStatus,
     status:status,
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
      setStatus = {setStatus}
      filterTodos = {filterTodos}/>
    </div>
    
  );
}

export default App;

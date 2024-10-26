import { useState,useEffect } from "react"
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"


function App() {

  const [todos,setTodos]=useState([])
  const [todoValue,setTodoValue]=useState('')

  const handleAddTodos=(newTodos)=>{
    const newTodoList=[...todos, newTodos]
    setTodos(newTodoList);
  }

  const handleDeleteTodo=(index)=>{
    const newTodoList=todos.filter((todo,todoIndex)=>{
      return todoIndex !== index   
    })
    setTodos(newTodoList)
  }

  const handleEditTodos=(index)=>{
    const ValueToBeEdited=todos[index]
    setTodoValue(ValueToBeEdited)
    handleDeleteTodo(index)
  }
  

  return(
    <>
   <Todoinput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
   <Todolist handleEditTodos={handleEditTodos} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App

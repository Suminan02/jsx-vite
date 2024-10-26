import React from 'react'

export default function Todocard (props) {

  const {children,handleDeleteTodo,index,handleEditTodos}=props
  return (
    <div>
      <li className='todoItem'>
        {children}
          <div className='actionContainer'>
            <button onClick={()=>{
              handleEditTodos(index)
            }}>
          <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={()=>{
            handleDeleteTodo(index)
          }}>
          <i className="fa-solid fa-trash-can"></i>
          </button>
          
          </div>
          
        </li>
    </div>
  )
}

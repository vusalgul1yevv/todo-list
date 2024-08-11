import React from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";


function Todo() {
  return (
    <div style={{width:"50%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <div style = {{alignItems:"flex-start"}} className="todo-text">Text</div>
        <div style={{}} className="todo-icons">
            <IoIosRemoveCircleOutline className="todo-icon"/>
            <FaEdit className="todo-icon"/>
        </div>
    </div>
  )
}

export default Todo
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

function TodoCreate() {
 

  return (
    <div className="todo-create">
      <div>
        <input className = "todo-input" type="text" placeholder="Write some note's"/>
        <button className="todo-btn">Send</button>
        <div className = "todo-icons">
          
        </div>    
      </div>
    </div>
  )
}

export default TodoCreate
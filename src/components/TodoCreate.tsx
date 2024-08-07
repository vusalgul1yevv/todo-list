import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

function TodoCreate() {
  return (
    <div className="todo-create">
        <input className = "todo-input" type="text" placeholder="Write some note's"/>
        <button className="todo-btn">Click</button>
        <FiSun style={{fontSize:"25px"}}/>
        <FaMoon style={{fontSize:"25px"}}/>
    </div>
  )
}

export default TodoCreate
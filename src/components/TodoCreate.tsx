import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

function TodoCreate() {
  const [theme, setTheme] = useState(true);
  const root : HTMLDivElement = document.getElementById("root") as HTMLDivElement;
  const button : HTMLButtonElement = document.querySelector(".todo-btn") as HTMLButtonElement;

  const changeTheme = () => {
    setTheme(!theme);

    if(theme) {
      root.style.backgroundColor = "rgb(40, 40, 44)";
      root.style.color = "#fff";
      button.style.backgroundColor = "#fff";
      button.style.color = "rgb(40, 40, 44)";
    }else{
      root.style.backgroundColor = "#fff";
      root.style.color = "rgb(40, 40, 44)";
      button.style.backgroundColor = "rgb(40, 40, 44)";
      button.style.color = "#fff";
    }
  }

  return (
    <div className="todo-create">
      <div>
        <input className = "todo-input" type="text" placeholder="Write some note's"/>
        <button className="todo-btn">Send</button>
        <div className = "todo-icons">
        {
          theme ? <FaMoon className="todo-icon" onClick={changeTheme}/>
          : <FiSun className="todo-icon" onClick={changeTheme}/>
        }
        </div>    
      </div>
    </div>
  )
}

export default TodoCreate
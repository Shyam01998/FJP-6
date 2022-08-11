import  { useState } from "react";
import './todoList.css';
import AddIcon from '@mui/icons-material/Add';


const TodoList = () => {
    const [item, setItem]= useState("");

    const onChange = (event) => {
        setItem(event.target.value)
        // console.log(setItem)
    }


  return (
    <div className="main-div">
      <div className="center-div">
        <h1>Todo List</h1>
        <input type="text" placeholder="Add an Item" value={item} onChange={onChange}/>
        <div className="add-btn">
            <AddIcon/>
        </div>
        <ol>
            <li></li>
        </ol>

      </div>
    </div>
  );
};

export default TodoList;

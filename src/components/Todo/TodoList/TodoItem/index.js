import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';

const TodoItem = (props) => {
  const {task ,setDoneTask, deleteTask} = props;

  return (
    <> 
      <li key={task.id}>{task.body} 
        <button  onClick={()=> setDoneTask({id:task.id, values: {isDone: !task.isDone}})}> <CheckRoundedIcon /> </button> 
        <button  onClick={()=>deleteTask(task.id)}> <DeleteIcon /> </button>
      </li>
          
    </>    
  );
} 

export default TodoItem;

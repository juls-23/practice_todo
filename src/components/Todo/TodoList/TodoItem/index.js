import React from 'react';
import styles from './TodoItem.module.scss'
import cx from 'classnames';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';

const TodoItem = (props) => {
  const {task ,setDoneTask, deleteTask} = props;
  
  const className = cx(styles.task, {
    [styles.done]: task.isDone,
  })

  return (
    <> 
      <li key={task.id} className={styles.taskWrapper}><span className={className}>{task.body} </span>
        <button  onClick={()=> setDoneTask({id:task.id, values: {isDone: !task.isDone}})} className={styles.checkedBtn}> <CheckRoundedIcon /> </button> 
        <button  onClick={()=>deleteTask(task.id)} className={styles.delBtn}> <DeleteIcon /> </button>
      </li>
          
    </>    
  );
} 

export default TodoItem;

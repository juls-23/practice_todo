import React from 'react';
import { renderArr } from '../../Filter';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const {filter, tasks, setDoneTask, deleteTask } = props;

  return (
    <ul>
      { 
        renderArr(filter, tasks).map((task)=> <TodoItem key={task.id} task={task} setDoneTask={setDoneTask} deleteTask={deleteTask} />)
      }
    </ul>
  );
}

export default TodoList;
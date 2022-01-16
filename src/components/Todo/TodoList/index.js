import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { tasks, setDoneTask, deleteTask } = props;

  return (
    <ul>
      { 
        tasks.map((task)=> <TodoItem key={task.id} task={task} setDoneTask={setDoneTask} deleteTask={deleteTask} />)
      }
    </ul>
  );
}

export default TodoList;
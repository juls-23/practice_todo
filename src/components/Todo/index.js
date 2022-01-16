import React from 'react';
import useTodo from '../../hooks/useTodo';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
  const { tasks, addTask, deleteTask, setDoneTask } =  useTodo([
    {id:Date.now(),
      body: '',
      isDone: false  
    }
  ]);

  return (
    <section>
      <TodoForm addTask={addTask}/>
      <TodoList tasks={tasks} setDoneTask={setDoneTask} deleteTask={deleteTask}/>

    </section>
  );
}

export default Todo;

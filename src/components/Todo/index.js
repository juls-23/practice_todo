import React from 'react';
import useTodo from '../../hooks/useTodo';
import TodoForm from './TodoForm';

const Todo = () => {
  const { tasks, addTask } =  useTodo([
    {id:Date.now(),
      body: '',
      isDone: false  
    }
  ]);

  return (
    <section>
      <TodoForm addTask={addTask}/>
    </section>
  );
}

export default Todo;

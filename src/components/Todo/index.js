import React from 'react';
import { useTodo, useFilter } from '../../hooks';
import FilterList from './FilterList';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
  const { tasks, addTask, deleteTask, setDoneTask } =  useTodo([
    {id:Date.now(),
      body: '',
      isDone: false  
    }
  ]);

  const {filter, filterTasks} = useFilter();

  return (
    <section>
      <TodoForm addTask={addTask}/>
      <FilterList filterTasks={filterTasks}/>
      <TodoList filter={filter} tasks={tasks} setDoneTask={setDoneTask} deleteTask={deleteTask}/>
    </section>
  );
}

export default Todo;

import React, { useState } from 'react';

export default function useTodo() {
  const [tasks, setTasks] = useState([]);

  return {
    tasks,
    setTasks,
    addTask: (value, formikBag)=>{
      const NewTask = {
        id:Date.now(),
        body:value.body,
        isDone:false,
      }
      setTasks([...tasks, NewTask]);
      formikBag.resetForm();
    },

    setDoneTask: ({id, values})=>{
      setTasks(tasks.map(task=> task.id===id ? {...task, ...values}: {...task}));
            
    }, 

    deleteTask: (id)=> {
     setTasks( tasks.filter( (item) => item.id!== id))
    },
  }  
}


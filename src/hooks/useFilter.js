import React, { useState, useEffect } from 'react';

export default function useFilter() {
  const [filter, setFilter] = useState('all');

  return {
    filter,
    filterTasks: ({target:{value}}) => {
      setFilter(()=>value)
    },
 
  }

}



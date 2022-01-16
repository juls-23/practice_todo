import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect'
import CONSTANTS from '../../../constants';
const { LIST_VALUES } = CONSTANTS;

const FilterList = (props) => {
  const {filterTasks} = props;

  return (
    <>
      <NativeSelect name='status' onChange={filterTasks} >
          {Object.values(LIST_VALUES).map((el, index)=><option key={index} value={el}>{el}</option>) }
      </NativeSelect>
     

    </> 
  );
}

export default FilterList;








// export default const Filter = (filter, tasks) => {
//   if(filter === 'all') return tasks;
//   if(filter === 'done') return tasks.filter((task)=> task.isDone);
//   if(filter === 'inprogress') return tasks.filter((task)=> !task.isDone);
// } 

// export default Filter;

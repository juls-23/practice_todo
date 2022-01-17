import React from 'react';
import styles from './FilterList.module.scss';
import CONSTANTS from '../../../constants';
const { LIST_VALUES } = CONSTANTS;


const FilterList = (props) => {
  const {filterTasks} = props;

  return (
    <div className={styles.wrapper}>
      <select name='status' onChange={filterTasks} className={styles.filter}>
        {Object.values(LIST_VALUES).map((el, index)=><option key={index} value={el}>{el}</option>) } 
      </select>
    </div> 
  );
}

export default FilterList;








// export default const Filter = (filter, tasks) => {
//   if(filter === 'all') return tasks;
//   if(filter === 'done') return tasks.filter((task)=> task.isDone);
//   if(filter === 'inprogress') return tasks.filter((task)=> !task.isDone);
// } 

// export default Filter;

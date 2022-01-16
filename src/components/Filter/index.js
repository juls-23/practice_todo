import CONSTANTS from "../../constants";
const { LIST_VALUES } = CONSTANTS;

export const renderArr = (filter, tasks) => {
  if(filter === LIST_VALUES.DONE) return tasks.filter((task)=> task.isDone);
  if(filter ===  LIST_VALUES.IN_PROGRESS) return tasks.filter((task)=> !task.isDone);
  return tasks;
}
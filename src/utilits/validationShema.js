import * as Yup from 'yup';

export const TODO_LIST_SCHEMA = Yup.object({
  body: Yup.string().matches(/^.{0,20}$/).required('Add task')
})
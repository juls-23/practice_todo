import * as Yup from 'yup';

export const TODO_LIST_SCHEMA = Yup.object({
  body: Yup.string().matches(/^.{0,25}$/,'should be less then 20 letters').required('required field')
})
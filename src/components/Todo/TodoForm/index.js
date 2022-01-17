import React from 'react';
import styles from './TodoForm.module.scss';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TODO_LIST_SCHEMA } from '../../../utilits/validationShema';

const TodoForm = (props) => {
  const { addTask } = props;
  
  return (
    <>
      <Formik validationSchema={TODO_LIST_SCHEMA} initialValues={{body:''}} onSubmit={addTask}>
        {
          (formikProps) => {
            return (
              <Form className={styles.form}>
                <label>
                  <Field name='body' placeholder='Add task' className={styles.input} />
                  <ErrorMessage name="body" component='div' className={styles.error} />
                </label>
                  <button type='submit' className={styles.btn}> <AddCircleIcon /> </button>
              </Form>
            )
           
          }
        }
       
      </Formik> 
    </>
  );
}

export default TodoForm;

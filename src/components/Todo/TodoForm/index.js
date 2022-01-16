import React from 'react';
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
              <Form>
                <label>
                  <Field name='body' placeholder='Add task'/>
                  <ErrorMessage name="body" component='div'  />
                </label>
                  <input type='submit' value='Add' />
              </Form>
            )
           
          }
        }
       
      </Formik> 
    </>
  );
}

export default TodoForm;

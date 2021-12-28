import React from 'react';
import { useFormik } from 'formik';
import response from '../API/apiresponse';
import RecursiveContainer from './RecursiveContainer';
import { getYupSchemaFromMetaData } from '../yupSchemaCreater';

const SignupForm = () => {
  const signupSchema = getYupSchemaFromMetaData(response, [], []);

  const formik = useFormik({
    initialValues: {
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: signupSchema
  });
  console.log(formik, response)
  return (
    <form onSubmit={formik.handleSubmit}>
       Errors: {JSON.stringify(formik.errors)}
      <RecursiveContainer config={response} formik={formik} />
      <button type="submit" disabled={!formik.isValid}>Submit</button>
    </form>
  );
};

export default SignupForm;
import "./styles.css";
import MyComponent from "./Component"
import AwesomeCompoenentWithReallyLongName from "./AwesomeComponent"
import { Formik, Form, FormikHelpers } from 'formik';
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Button, InputLabel, Typography } from "@material-ui/core";
import { actionTypes, selectors } from './store/features/formSubmit'
import * as Yup from "yup";

// One remark: in the starter version so far you have sent me a dependency "react-scripts": "4.0.0"
// This post-release version had a build bug, I just updated the build to "react-scripts": "4.0.3" to fix the bug


// simple validation on empty field
const formSchema = Yup.object().shape({
  value: Yup.string().required(),
})

interface FormValues { value: string | null }
const initialValues: FormValues = {
  value: null
};

const App: React.FC = () => {
  const currentValue = useSelector(selectors.submitValue);
  const dispatch = useDispatch();

  return (
    <>
    {/* Just to show you store value */}
      <Typography variant="overline" display="block">
        What will my dragon-worm burn? Oh, this {currentValue}
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={(
          values: {
            value: string | null
          },
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          dispatch({
            type: actionTypes.SUBMIT,
            value: values.value,
          });
          setSubmitting(false);
        }}
      >
        {
          formProps  => 
          (
          <Form onSubmit={formProps.handleSubmit} >
            <InputLabel htmlFor="firstName">Your sacrifice to the fire</InputLabel>
            <MyComponent id='value' onChange={formProps.handleChange} error={formProps.errors.value} />
            <Button variant="contained" color="primary" type="submit" >
              Birn it!
            </Button>
          </Form>
          )
        }
      </Formik>
      <AwesomeCompoenentWithReallyLongName />
    </>
  )
}

export default App

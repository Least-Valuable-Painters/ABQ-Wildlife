import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import React from "react";
import {useDispatch} from "react-redux";
import * as Yup from 'yup'
import {httpConfig} from "../../utils/httpConfig";
import {Formik} from "formik";
import {DisplayError} from "../display-error/DisplayError";
import {DisplayStatus} from "../DisplayStatus";
import {FormDebugger} from "../FormDebugger";
import jwtDecode from "jwt-decode";
import {getAuth} from "../../../../store/auth";

export function SignIn() {

  const dispatch = useDispatch()

  const validator = Yup.object().shape({
    userEmail: Yup.string().email()
      .required('An email is required.')
      .max(64, 'Email must be 64 characters or less.'),
    userPassword: Yup.string()
      .required('Password is required')
      .max(255, 'Password must be 255 characters or less.'),
  })

  const handleSubmit = (values, { resetForm, setStatus }) => {
    httpConfig.post('/apis/signin/', values)
        .then(reply => {
          const { message, type, status } = reply
          if (reply.status === 200 && reply.headers["authorization"]) {
            window.localStorage.removeItem("authorization");
            window.localStorage.setItem("authorization", reply.headers["authorization"]);
            resetForm();
            let jwtToken = jwtDecode(reply.headers["authorization"])
            dispatch(getAuth(jwtToken))
      }
      setStatus({ message, type });
    });
  };

  const signIn = {
    userEmail: '',
    userPassword: '',
  }


  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={signIn}
        validationSchema={validator}
      >
        {PostSignInContent}
      </Formik>
    </>
  )
}


function PostSignInContent (props) {
  //console.log("userName, userPassword")
  const {
    status,
    values,
    errors,
    touched,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props
  return(
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mt-3">
          <FormLabel>Email</FormLabel>
          <FormControl
                       name="userEmail"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       type="email"
                       placeholder="email"
                       value={values.userEmail}
          />
          <DisplayError errors={errors} touched={touched} field={'userEmail'}/>
        </FormGroup>
        <FormGroup className="mt-3 mb-3">
          <FormLabel>Password</FormLabel>
          <FormControl
            name="userPassword"
            type="password"
            placeholder="password"
            value={values.userPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <DisplayError errors={errors} touched={touched} field={'userPassword'}/>
        </FormGroup>
        <Button onClick={handleSubmit} className="mt-3" variant="primary">Sign In</Button>
      </Form>
      <DisplayStatus status={status}/>
      <FormDebugger {...props} />
    </>
  )
}

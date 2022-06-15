import React from "react";
import {Button, Col, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import * as Yup from "yup";
import {httpConfig} from "./shared/utils/httpConfig";
import {Formik} from "formik";
import {DisplayError} from "./shared/components/display-error/DisplayError";
import {FormDebugger} from "./shared/components/FormDebugger";
import {DisplayStatus} from "./shared/components/DisplayStatus";
import "./SignUp.css"

export function SignUp() {
    const signUp = {
        userEmail: '',
        userName: '',
        userPassword: '',
    };

    const validator = Yup.object().shape({
        userEmail: Yup.string().email()
            .required('An email is required.')
            .max(64, 'Email must be 64 characters or less.'),
        userName: Yup.string()
            .required('Username is required')
            .max(128, "Username must be 128 characters or less."),
        userPassword: Yup.string()
            .required('Password is required')
            .max(255, 'Password must be 255 characters or less.'),
    })

    const submitSignUp = (values, {resetForm, setStatus}) => {
        httpConfig.post('/apis/signup/', values)
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    resetForm();
                }
                setStatus({message, type});
            });
    };


    return (
        <>
            <Formik
                onSubmit={submitSignUp}
                initialValues={signUp}
                validationSchema={validator}
            >
                {SignUpFormContent}
            </Formik>
        </>
    )
}

function SignUpFormContent(props) {
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

    return (
        <>
            <div className="container-fluid signUpBackground">
                <h1 className="text-center text-light">Sign Up</h1>
                <Container className="bg-dark signUpForm rounded">
                    <Row>
                        <Col className="innerSignUpForm rounded">
                            <Form className="w-75 mx-auto" onSubmit={handleSubmit}>
                                <FormGroup>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl
                                        name="userName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="username"
                                        placeholder="Please enter your username"
                                        value={values.userName}
                                    />
                                    <DisplayError errors={errors} touched={touched} field={'userName'}/>
                                </FormGroup>
                                <FormGroup className="mt-3">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl
                                        name="userEmail"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="email"
                                        placeholder="Please enter your email address"
                                        value={values.userEmail}
                                    />
                                    <DisplayError errors={errors} touched={touched} field={'userEmail'}/>
                                </FormGroup>
                                <FormGroup className="mt-3">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl
                                        name="userPassword"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="password"
                                        placeholder="Please enter your password"
                                        value={values.userPassword}
                                    />
                                    <DisplayError errors={errors} touched={touched} field={'userPassword'}/>
                                </FormGroup>
                                <FormGroup controlId="formBasicCheckbox">
                                    <FormCheck className="mt-3" type="checkbox" label="Turn location data on"/>
                                </FormGroup>
                                <FormGroup controlId="formBasicCheckbox">
                                    <FormCheck className="mt-3" type="checkbox" label="Get email updates"/>
                                </FormGroup>
                                <Button type="submit" className="mt-3" variant="primary">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <DisplayStatus status={status}/>
                <FormDebugger {...props} />
            </div>
        </>
    )
}


